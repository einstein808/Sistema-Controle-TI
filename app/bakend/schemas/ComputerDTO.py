from pydantic import BaseModel
from typing import Optional
class Computer(BaseModel):
    id:Optional[str] = None
    processador:str
    disco:str
    memoriaRam:str
    usuario:Usuario
    loja:Loja
