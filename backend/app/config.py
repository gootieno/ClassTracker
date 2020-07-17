import os

class Configuration:
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        "DATABASE_URL") or "postgresql://classTracker:classtracker@localhost/classTracker_db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = "a178d184866839ac7f2a88b156cb4285999f1cb506689cd7234263115149b4a4"