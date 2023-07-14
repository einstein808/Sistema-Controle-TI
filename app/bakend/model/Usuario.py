class Usuario(BaseModel):
    id:Optional[str] = None
    nome: str
    telefone:str
    computador:Computer

