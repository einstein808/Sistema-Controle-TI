from sqlalchemy import Column, Integer, String
from bakend.config.database import Base
class Computer(Base):
    __tablename__ = "Computer"
    id = Column(Integer, primary_key=True, index=True)
    processador: Column(String)
    disco: Column(String)
    memoria: Column(String)
    usuario: Column(String)


