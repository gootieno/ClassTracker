from flask import flask
from flask_migrate import Migrate
import os

from app.models import db

if os.environ.get("FLASK_ENV") == 'production':
    app = Flask(__name__, static_folder='../frontend/build/static',
                static_url_path='/static')
else:
    app = Flask(__name__)

app.config.from_object(Configuration)
db.init_app(app)
migrate = Migrate(app, db)