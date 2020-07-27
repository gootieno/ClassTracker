from app import app
from app.models import db
from app.models.assessments import Assessment
from app.models.cohort import Cohort
from app.models.students import Student
from app.models.instructors import Instructor
from app.models.projects import Project
from app.models.student_assessments import StudentAssessment
from app.models.cohort_instructors import cohort_instructors

with app.app_context():
    db.drop_all()
    db.create_all()
    cohort1 = Cohort(date='2020-2-24', location='online')
    student1 = Student(first_name='James', last_name='Robertson', password='pass1234', pronounciation='', email='james@know-it-all.com',
                       pronoun='', phone_number='123-456-7890', linked_in='', website='', github='', bio='', photoUrl='', cohort_id=1)
    instructor1 = Instructor(first_name='Bryce', last_name='Morgan', password='pass1234', pronounciation='',
                             email='bryce@morgan.com', pronoun='he/him/his', phone_number='123-456-7890', photoUrl='')
    project1 = Project(project_name='Slick', student_id=1)

    db.session.add(cohort1)
    db.session.add(student1)
    db.session.add(instructor1)
    db.session.add(project1)

    db.session.commit()
