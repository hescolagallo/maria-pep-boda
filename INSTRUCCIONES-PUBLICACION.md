# Publicar la web de Maria i Pep

## 1. Crear el repositorio en GitHub

1. Entra en [github.com/new](https://github.com/new)
2. **Repository name:** `maria-pep-boda`
3. Deja el repositorio **público** (necesario para GitHub Pages gratuito)
4. **No** marques "Add a README" — ya tienes los archivos en local
5. Pulsa **Create repository**

## 2. Subir el código

En la terminal, desde la carpeta del proyecto:

```bash
git remote set-url origin https://github.com/hescolagallo/maria-pep-boda.git
git push -u origin main
```

Si es la primera vez, GitHub te pedirá iniciar sesión.

## 3. Activar GitHub Pages

1. Ve a **Settings → Pages** del repositorio
2. En **Build and deployment → Source**, elige **Deploy from a branch**
3. **Branch:** `main` · carpeta **`/ (root)`**
4. Guarda. En 1–2 minutos la web estará en:

   **https://hescolagallo.github.io/maria-pep-boda/**

## 4. Dominio propio (cuando lo tengas)

### En GitHub

1. Crea un archivo `CNAME` en la raíz del repo con solo tu dominio, por ejemplo:

   ```
   bodamariaipep.com
   ```

2. Súbelo:

   ```bash
   git add CNAME
   git commit -m "Añadir dominio personalizado"
   git push
   ```

3. En **Settings → Pages → Custom domain**, escribe el mismo dominio y guarda.
4. Activa **Enforce HTTPS** cuando GitHub lo permita (puede tardar unas horas).

### En tu registrador de dominio (DNS)

**Opción A — dominio raíz (`tudominio.com`):**

| Tipo | Nombre | Valor              |
|------|--------|--------------------|
| A    | @      | 185.199.108.153    |
| A    | @      | 185.199.109.153    |
| A    | @      | 185.199.110.153    |
| A    | @      | 185.199.111.153    |

**Opción B — subdominio (`www.tudominio.com`):**

| Tipo  | Nombre | Valor                      |
|-------|--------|----------------------------|
| CNAME | www    | hescolagallo.github.io     |

La propagación DNS puede tardar hasta 24–48 h.

## 5. Comprobar que todo funciona

- [ ] La portada carga bien en móvil y escritorio
- [ ] El calendario hace scroll y centra el 18
- [ ] El formulario RSVP envía respuestas a Google Forms
- [ ] El botón de idioma CA ↔ PT-BR cambia textos e imágenes
- [ ] Los enlaces de Google Maps abren correctamente

## Formulario RSVP

Las respuestas llegan al Google Form configurado en `script.js`. Comprueba en Google Sheets que llegan datos de prueba antes de compartir la URL con invitados.
