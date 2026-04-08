# Court Department Features Application

Веб-приложение для обработки и анализа судебных дел из Excel файлов. Позволяет загружать файлы в формате .xlsx, фильтровать данные по диапазону дат и просматривать обработанную информацию.

## Архитектура

Проект состоит из двух основных частей:

- **Backend** (NestJS) - API сервер для обработки Excel файлов
- **Frontend** (React + Vite) - пользовательский интерфейс

## Технологии

### Backend
- **NestJS** - фреймворк для Node.js
- **TypeScript** - типизированный JavaScript
- **ExcelJS** и **XLSX** - библиотеки для работы с Excel файлами
- **Express** - веб-фреймворк

### Frontend
- **React 19** - библиотека для создания пользовательских интерфейсов
- **Vite** - инструмент сборки
- **Redux Toolkit** - управление состоянием
- **PrimeReact** - UI компоненты
- **React Router** - маршрутизация
- **Axios** - HTTP клиент

## Структура проекта

```
court-dep-features/
├── backend/                 # Серверная часть (NestJS)
│   ├── src/
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   └── upload/         # Модуль загрузки файлов
│   │       ├── upload.controller.ts
│   │       ├── upload.service.ts
│   │       └── lib/        # Утилиты для обработки Excel
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
├── frontend/                # Клиентская часть (React)
│   ├── src/
│   │   ├── 01-app/         # Приложение (Feature-Sliced Design)
│   │   ├── 02-pages/       # Страницы
│   │   ├── 03-widgets/     # Виджеты
│   │   ├── 04-features/    # Фичи
│   │   ├── 05-entities/    # Сущности
│   │   └── 06-shared/      # Общие компоненты
│   ├── package.json
│   ├── vite.config.ts
│   └── ...
└── README.md
```

## Установка и запуск

### Предварительные требования

- Node.js (версия 18+)
- npm или yarn

### Backend

1. Перейдите в директорию backend:
   ```bash
   cd backend
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Запустите сервер в режиме разработки:
   ```bash
   npm run start:dev
   ```

Сервер будет доступен по адресу `http://localhost:3000`

### Frontend

1. Перейдите в директорию frontend:
   ```bash
   cd frontend
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Запустите приложение в режиме разработки:
   ```bash
   npm run dev
   ```

Приложение будет доступно по адресу `http://localhost:5173`

### Production сборка

#### Backend
```bash
cd backend
npm run build
npm run start:prod
```

#### Frontend
```bash
cd frontend
npm run build
npm run preview
```

## Использование

1. **Запуск приложения**: После запуска backend и frontend, откройте браузер и перейдите по адресу frontend (обычно `http://localhost:5173`)

2. **Загрузка файла**:
   - Выберите Excel файл в формате .xlsx
   - Опционально укажите диапазон дат для фильтрации
   - Нажмите кнопку загрузки

3. **Обработка данных**:
   - Backend автоматически обработает файл
   - Данные будут очищены, отфильтрованы и типизированы
   - Результаты вернутся в виде структурированных данных

4. **Просмотр результатов**:
   - Обработанные данные отображаются в интерфейсе
   - Можно просматривать судебные дела с примененными фильтрами

## API

### POST /api/upload

Загружает и обрабатывает Excel файл.

**Параметры:**
- `file` (multipart/form-data) - Excel файл (.xlsx)
- `startDate` (опционально) - начальная дата фильтрации
- `endDate` (опционально) - конечная дата фильтрации

**Ответ:**
```json
{
  "finalData": [...],
  "data": []
}
```

## Разработка

### Скрипты

#### Backend
- `npm run start:dev` - запуск в режиме разработки с hot-reload
- `npm run build` - сборка проекта
- `npm run test` - запуск unit тестов
- `npm run lint` - проверка кода линтером

#### Frontend
- `npm run dev` - запуск dev сервера
- `npm run build` - сборка для production
- `npm run lint` - проверка кода линтером
- `npm run preview` - предпросмотр собранного приложения

### Архитектурные принципы

Проект следует принципам:
- **Feature-Sliced Design** (frontend)
- **SOLID** принципы
- **RESTful API** (backend)
- **TypeScript** для типизации

## Лицензия

UNLICENSED
