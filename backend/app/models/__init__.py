from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from .assessments import Assessment  # noqa
from .cohort import Cohort  # noqa
from .cohort_instructors import cohort_instructors  # noqa
from .instructors import Instructor  # noqa
from .projects import Project  # noqa
from .student_assessments import StudentAssessment  # noqa
from .student_strikes import Student_Strike  # noqa
from .students import Student  # noqa
