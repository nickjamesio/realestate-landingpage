import os

class Config:
    MAILCHIMP_API_KEY = os.environ.get('MAILCHIMP_API_KEY')
    MAILCHIMP_LIST_ID = os.environ.get('MAILCHIMP_LIST_ID')
    MAILCHIMP_USER = os.environ.get('MAILCHIMP_USER')