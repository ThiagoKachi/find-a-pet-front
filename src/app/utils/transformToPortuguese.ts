export function transformSize(size?: string) {
  switch (size) {
  case 'Small':
    return 'Pequeno';
  case 'Medium':
    return 'Médio';
  case 'Large':
    return 'Grande';
  default:
    return 'Indefinido';
  }
}

export function transformGender(size?: string) {
  switch (size) {
  case 'Male':
    return 'Macho';
  case 'Female':
    return 'Fêmea';
  default:
    return 'Indefinido';
  }
}
