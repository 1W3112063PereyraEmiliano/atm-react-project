"""Modificación en columna de tabla Usuarios

Revision ID: c33805c6f1cc
Revises: abc4d096fa1a
Create Date: 2023-03-21 15:29:39.534254

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'c33805c6f1cc'
down_revision = 'abc4d096fa1a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('username',
               existing_type=mysql.VARCHAR(length=100),
               nullable=False)
        batch_op.alter_column('name',
               existing_type=mysql.VARCHAR(length=100),
               nullable=False)
        batch_op.alter_column('last_name',
               existing_type=mysql.VARCHAR(length=100),
               nullable=False)
        batch_op.alter_column('password',
               existing_type=mysql.VARCHAR(length=400),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=mysql.VARCHAR(length=400),
               nullable=True)
        batch_op.alter_column('last_name',
               existing_type=mysql.VARCHAR(length=100),
               nullable=True)
        batch_op.alter_column('name',
               existing_type=mysql.VARCHAR(length=100),
               nullable=True)
        batch_op.alter_column('username',
               existing_type=mysql.VARCHAR(length=100),
               nullable=True)

    # ### end Alembic commands ###
