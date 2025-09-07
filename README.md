
# Payroll System (Full Stack: Django + React)

An end-to-end starter you can run locally with Docker or without Docker.

## Quick Start (Docker)
```bash
docker-compose up --build
```
- Frontend
- Backend
- Postgres: localhost:5432

## Local Dev (without Docker)

### Backend
```bash
cd backend
python -m venv .venv && source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.backend.example .env.backend
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Frontend
```bash
cd frontend
npm install
# Optionally: copy and edit env
cp .env.example .env
npm start
```

Ensure `.env` (frontend) contains:
```
REACT_APP_API_URL=http://localhost:8000
```

## CI/CD (GitHub Actions)
- Workflow in `.github/workflows/deploy.yml`:
  - Sets up Postgres
  - Installs backend & frontend deps
  - Runs Django migrations
  - Builds the frontend

## Notes
- Default database credentials are for local dev only.
- For production, set `DEBUG=False`, a strong `SECRET_KEY`, and proper `ALLOWED_HOSTS`.
