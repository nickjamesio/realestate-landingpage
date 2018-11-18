import re
import logging

def initialize_logging():
    """
    Initilize logging for app
    """
    fh = logging.FileHandler('/tmp/log.log')
    logger = logging.getLogger('mailchimp3.client')
    logger.addHandler(fh)

def check_price(price):
    return re.match(r"^[1-9]\d{0,2}(,\d{3})*$", price) != None

def check_transaction(transaction):
    """
    Check for valid transaction value
    :transaction: string
    :return: bool
    """
    valid_values = {
        "buy": "buyer",
        "sell": "seller",
        "invest": "investor"
    }
    return transaction in valid_values

def check_phone(phone):
    """
    Function that verifies that the string passed is a valid phone number.
    :param phone: The potential phone number
    :type phone: string
    :return: bool
    """
    return re.match(r"^\([1-9]\d{2}\)\s?\d{3}-\d{4}", phone) != None

def check_email(email):
    """
    Function that verifies that the string passed is a valid email address.
    Regex for email validation based on MailChimp limits:
    http://kb.mailchimp.com/accounts/management/international-characters-in-mailchimp
    :param email: The potential email address
    :type email: string
    :return: bool
    """
    return re.match(r"^.+@.+\..+$", email) != None

def get_empty_keys(keys, data):
    """
    Retrieve list of empty keys in json body
    :param keys: list
      List of keys we care about
    :param data: dict
      Dictionary of json payload
    :return: list
    """
    empty = []
    for key in keys:
        if not data[key]:
            empty.append(key)
    return empty


def get_missing_keys(expected, actual):
    """
    Retrieve list of missing keys in json body
    :param expected: list
      List of expected keys
    :param actual: dict
      Dictionary of json payload
    :return: list
    """
    missing = []
    for key in expected:
        if key not in actual:
            missing.append(key)
    return missing
