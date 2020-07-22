"""empty message

Revision ID: bcb1e8d0707c
Revises: 5e2fdaa4cb2f
Create Date: 2020-07-22 10:00:42.256154

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bcb1e8d0707c'
down_revision = '5e2fdaa4cb2f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('students', sa.Column('pronoun', sa.String(length=10), nullable=False))
    op.drop_column('students', 'pronount')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('students', sa.Column('pronount', sa.VARCHAR(length=10), autoincrement=False, nullable=False))
    op.drop_column('students', 'pronoun')
    # ### end Alembic commands ###