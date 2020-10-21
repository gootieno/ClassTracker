"""create all tables

Revision ID: f0dbe95fe6fb
Revises: 
Create Date: 2020-10-20 18:28:37.667122

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f0dbe95fe6fb'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('student_assessments', 'multiple_choice')
    op.drop_column('student_assessments', 'coding')
    op.drop_column('student_assessments', 'overrall')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('student_assessments', sa.Column('overrall', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('student_assessments', sa.Column('coding', sa.INTEGER(), autoincrement=False, nullable=True))
    op.add_column('student_assessments', sa.Column('multiple_choice', sa.INTEGER(), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
