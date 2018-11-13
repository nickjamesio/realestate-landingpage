import json
from flask import request
from mailchimp3 import MailChimp
from mailchimp3.mailchimpclient import MailChimpError
from src import app
from src.helpers import initialize_logging, get_missing_keys, get_empty_keys, check_email, check_phone, check_price, check_transaction
from src.config import Config


api_key = app.config.get("MAILCHIMP_API_KEY")
user = app.config.get("MAILCHIMP_USER")
list_id = app.config.get("MAILCHIMP_LIST_ID")
tags = {
    "buy": "buy",
    "sell": "sell",
    "investor": "investor"
}

@app.route("/clients", methods=["POST"])
def clients():
    response = {"message": ""}

    if not request.is_json:
        response["message"] = "Missing 'application/json' header"
        response["status"] = 400

    data = request.json
    keys = ["name", "email", "phone"]
    missing_keys = get_missing_keys(keys, data)
    empty_keys = get_empty_keys(keys, data)

    if missing_keys:
        response["message"] = "The following keys must be set in payload [{}]".format(
            ", ".join(missing_keys))
        response["status"] = 400
    elif empty_keys:
        response["message"] = "The following keys cannot have an empty value [{}]".format(
            ", ".join(empty_keys))
        response["status"] = 400
    elif not check_email(data["email"]):
        # TODO replace with neverbounce request
        response["message"] = "Invalid 'email' value: '{}'".format(
            data["email"])
        response["status"] = 400
    elif not check_phone(data["phone"]):
        response["message"] = "Invalid 'phone' value: '{}'".format(
            data["phone"])
        response["status"] = 400
    elif "transaction" in data and not check_transaction(data["transaction"]):
        response["message"] = "Invalid 'transaction' value: '{}'".format(
            data["transaction"])
        response["status"] = 400

    # Assuming everything passed
    client = MailChimp(mc_api=api_key, mc_user=user)
    try:
        request_data = {
            "email_address": data["email"],
            "status": "subscribed",
            "merge_fields": {
                "FNAME": data["name"],
                "PHONE": data["phone"]
            },
            "ip_signup": request.remote_addr
        }
        request_data["tags"] = [data["transaction"]]
        response = client.lists.members.create(
            list_id=list_id, data=request_data)
    except MailChimpError as e:
        errors = e.args[0]
        response["message"] = errors["detail"]
        response["status"] = errors["status"]
    except Exception as e:
        response["message"] = str(e)
        response["status"] = 500
    else:
        response["message"] = "Successfully added '{}' to mail list".format(
            data["email"])
        response["status"] = 200
    finally:
        return json.dumps(response)
