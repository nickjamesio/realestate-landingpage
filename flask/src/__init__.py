import os
import logging
from flask import Flask
from flask_cors import CORS
from src.config import Config
from src.helpers import initialize_logging

app = Flask(__name__)
app.config.from_object(Config)

# Enable CORS
if app.env == 'production':
    CORS(app, origins=["https://homeswithaudrey.com", "https://www.homeswithaudrey.com"])
else:
    CORS(app)

initialize_logging()

from src import api