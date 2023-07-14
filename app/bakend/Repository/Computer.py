from sqlalchemy.orm import Session
from bakend.schemas.ComputerDTO import ComputerDTO
from bakend.model.Computer import Computer
class RepositoryComputer():
    def __init__(self, db: Session) -> None:
        self.db = db
    def criar(self, computer:ComputerDTO):
        db_computer = Computer(processador=computer.processador)
    def listar(self):
        pass
    def obter(self):
        pass
    def remover(self):
        pass