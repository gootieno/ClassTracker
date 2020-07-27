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
                       pronoun='he/him/his', phone_number='123-456-7890', linked_in='https://www.linkedin.com/in/james-robertson-31b623116/', website='', github='https://github.com/jamesurobertson', bio='', photoUrl='', cohort_id=1)
    student2 = Student(first_name='Brad', last_name='Simpson', password='pass1234', pronounciation='', email='brad@simpson.com',
                       pronoun='he/him/his', phone_number='123-456-7890', linked_in='https://www.linkedin.com/in/brad-simpson-a6b1b7b2/', website='', github='https://github.com/bradsimpson213', bio='', photoUrl='', cohort_id=1)
    student3 = Student(first_name='Ben', last_name='Perlmutter', password='pass1234', pronounciation='', email='ben@perlmutter.com',
                       pronoun='', phone_number='123-456-7890', linked_in='https://www.linkedin.com/in/ben-perlmutter-a410228a/', website='', github='https://github.com/bpmutter', bio='', photoUrl='', cohort_id=1)
    student4 = Student(first_name='Geoffrey', last_name='Otieno', password='pass1234', pronounciation='', email='geoffrey@otieno.com',
                       pronoun='he/him/his', phone_number='123-456-7890', linked_in='https://www.linkedin.com/in/geoffrey-otieno-57015966/', website='', github='https://github.com/gootieno', bio='', photoUrl='', cohort_id=1)
    instructor1 = Instructor(first_name='Bryce', last_name='Morgan', password='pass1234', pronounciation='',
                             email='bryce@morgan.com', pronoun='he/him/his', phone_number='123-456-7890', photoUrl='')

    instructor2 = Instructor(first_name='Bakari', last_name='Holmes', password='pass1234', pronounciation='',
                             email='bakari@holmes.com', pronoun='he/him/his', phone_number='123-456-7890', photoUrl='')

    project1 = Project(project_name='Slick', student_id=1)
    project2 = Project(project_name='Star Trader', student_id=2)
    project3 = Project(project_name='Rappa Mappa', student_id=3)
    project4 = Project(project_name='Sneakflix', student_id=4)

    db.session.add(cohort1)
    db.session.add(student1)
    db.session.add(student2)
    db.session.add(student3)
    db.session.add(student4)

    db.session.add(instructor1)
    db.session.add(instructor2)

    db.session.add(project1)
    db.session.add(project2)
    db.session.add(project3)
    db.session.add(project4)

    db.session.commit()
