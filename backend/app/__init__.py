from flask import Flask
from flask_migrate import Migrate
from app.config import Configuration
import os

from app.routes import assessments
from app.routes import instructors
from app.routes import projects
from app.routes import students

from app.models import db

if os.environ.get("FLASK_ENV") == 'production':
    app = Flask(__name__, static_folder='../frontend/build/static',
                static_url_path='/static')
else:
    app = Flask(__name__)

app.config.from_object(Configuration)
db.init_app(app)
Migrate(app, db)

app.register_blueprint(assessments.bp)
app.register_blueprint(instructors.bp)
app.register_blueprint(projects.bp)
app.register_blueprint(students.bp)


@app.route('/')
def home():
    return {'message': 'backend up and running! :)'}
