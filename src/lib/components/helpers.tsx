import { TSettings } from "./type";

// build charater pool for the password generator
export const buildCharacterPool = (settings: TSettings) => {
  let characters = "";

  if (settings.uppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (settings.lowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (settings.numbers) {
    characters += "0123456789";
  }

  if (settings.symbols) {
    characters += "!@£$%^&*";
  }

  if (characters.length === 0) {
    characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  }

  return characters;
};

// create new password (length and characters)

export const generatePassword = (
  passwordLength: number,
  characters: string,
) => {
  let newPassword = "";
  const passwordLengthValue = Number(passwordLength);

  for (let i = 0; i < passwordLengthValue; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    newPassword += characters[randomIndex];
  }

  return newPassword;
};

// calculate password score (password)

export const calculatePasswordScore = (newPassword: string) => {
  let passwordScore = 0;

  if (newPassword.length >= 8) {
    passwordScore++;
  }

  if (newPassword.length >= 12) {
    passwordScore++;
  }

  if (newPassword.length >= 16) {
    passwordScore++;
  }

  if (newPassword.length >= 20) {
    passwordScore++;
  }

  if (/[A-Z]/.test(newPassword)) {
    passwordScore++;
  }

  if (/[a-z]/.test(newPassword)) {
    passwordScore++;
  }

  if (/[0-9]/.test(newPassword)) {
    passwordScore++;
  }

  if (/[!@£$%^&*]/.test(newPassword)) {
    passwordScore++;
  }

  return passwordScore;
};

// get the password strength(score)

export const calculatePasswordStrength = (passwordScore: number) => {
  let passwordStrength = "";
  let strengthLevel = 0;

  if (passwordScore <= 2) {
    passwordStrength = "WEAK";
    strengthLevel = 1;
  } else if (passwordScore <= 4) {
    passwordStrength = "MEDIUM";
    strengthLevel = 2;
  } else if (passwordScore <= 6) {
    passwordStrength = "STRONG";
    strengthLevel = 3;
  } else {
    passwordStrength = "VERY STRONG";
    strengthLevel = 4;
  }

  return {
    strength: passwordStrength,
    level: strengthLevel,
  };
};
