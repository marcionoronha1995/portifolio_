async function encryptText(plainText, password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plainText);
    const key = await window.crypto.subtle.importKey(
      'raw',
      encoder.encode(password),
      { name: 'AES-GCM', length: 128 },
      false,
      ['encrypt']
    );
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await window.crypto.subtle.encrypt(
      { name: 'AES-GCM', iv: iv },
      key,
      data
    );
    return { encrypted, iv };
  }
  
  // Uso:
  const plainText = 'Marcio Luiz Noronha';
  const password = 'M1995$%KlL112xn7'; // Certifique-se de que a senha tenha pelo menos 16 caracteres (128 bits)
  encryptText(plainText, password).then(({ encrypted, iv }) => {
    console.log('Texto criptografado:', new Uint8Array(encrypted));
    console.log('IV:', iv);
  });
  