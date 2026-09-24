/**
 * Subida de fotos a Google Drive para la web de Maria i Pep.
 *
 * IMPORTANTE — hacer una sola vez antes de desplegar:
 * 1. Selecciona la función "autorizar" en el desplegable y pulsa Ejecutar
 * 2. Acepta todos los permisos de Google Drive
 * 3. Implementar → Nueva implementación → Aplicación web
 *    - Ejecutar como: Yo
 *    - Quién tiene acceso: Cualquiera
 * 4. Copia la URL /exec en PHOTO_UPLOAD_URL de script.js
 */

var FOLDER_ID = '1voqDfkZA7OINinimLAFQ0u2tVxyepVus';

function autorizar() {
  var folder = DriveApp.getFolderById(FOLDER_ID);
  Logger.log('Permisos OK. Carpeta: ' + folder.getName());
}

function doPost(e) {
  try {
    var payload = parsePayload(e);

    if (!payload) {
      return jsonResponse({ success: false, error: 'No se recibieron datos.' });
    }

    var fileName = sanitizeFileName(payload.fileName || 'foto.jpg');
    var mimeType = payload.mimeType || 'image/jpeg';
    var fileData = payload.file;

    if (!fileData) {
      return jsonResponse({ success: false, error: 'Falta el archivo.' });
    }

    var bytes = Utilities.base64Decode(fileData);
    var blob = Utilities.newBlob(bytes, mimeType, fileName);
    var folder = DriveApp.getFolderById(FOLDER_ID);
    var file = folder.createFile(blob);

    return jsonResponse({
      success: true,
      fileName: file.getName(),
      fileId: file.getId()
    });
  } catch (error) {
    return jsonResponse({
      success: false,
      error: error.message || String(error)
    });
  }
}

function doGet() {
  return jsonResponse({ success: true, message: 'Photo upload endpoint ready.' });
}

function parsePayload(e) {
  if (!e) return null;

  if (e.postData && e.postData.contents) {
    return JSON.parse(e.postData.contents);
  }

  if (e.parameter && e.parameter.payload) {
    return JSON.parse(e.parameter.payload);
  }

  return null;
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function sanitizeFileName(name) {
  var cleaned = String(name)
    .replace(/[^\w.\-() ]+/g, '_')
    .replace(/\s+/g, '_')
    .slice(0, 120);

  if (!cleaned) {
    cleaned = 'foto_' + new Date().getTime() + '.jpg';
  }

  return cleaned;
}
