from flask import Flask
from src.config import Config
from src.helpers import initialize_logging

app = Flask(__name__)
app.config.from_object(Config)

initialize_logging()