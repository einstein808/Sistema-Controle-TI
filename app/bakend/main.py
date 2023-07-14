from fastapi import FastAPI
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy import Column, Integer, String


app = FastAPI()
@app.get("/")
def read_root():
    return {"message": "Hello, World!"}
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

SQLALCHEMY_DATABASE_URL = "sqlite:///data/database.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class MyTable(Base):
    __tablename__ = "my_table"
    id = Column(Integer, primary_key=True, index=True)
    column1 = Column(String, index=True)
    column2 = Column(Integer)

    def __init__(self, column1: str, column2: int):
        self.column1 = column1
        self.column2 = column2

Base.metadata.create_all(bind=engine)
@app.post("/create_record")
async def create_record(column1: str, column2: int):
    db = SessionLocal()
    new_record = MyTable(column1=column1, column2=column2)
    db.add(new_record)
    db.commit()
    db.refresh(new_record)
    return {"message": "Record created successfully", "record_id": new_record.id}
