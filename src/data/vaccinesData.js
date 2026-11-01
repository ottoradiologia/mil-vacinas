// highlights: aparecem primeiro na aba, com selo "Destaque"
export const vaccinesData = {
  crianca: {
    title: 'Para Crianças',
    subtitle: '0-12 anos',
    icon: 'Baby',
    highlights: ['meningococica_b', 'meningococica_acwy'],
    vaccines: [
      'meningococica_b',
      'meningococica_acwy',
      'hexavalente_acelular',
      'pneumococica_15',
      'rotavirus_pentavalente',
      'influenza_quadrivalente',
      'febre_amarela',
      'hepatite_a',
      'triplice_viral',
      'varicela_catapora',
      'tetra_viral',
      'pentavalente_acelular',
      'dtpa_vip',
      'dengue',
      'hpv_nonavalente',
      'pneumococica_20',
      'beyfortus'
    ]
  },
  adolescente: {
    title: 'Para Adolescentes',
    subtitle: '12-19 anos',
    icon: 'User',
    vaccines: [
      'hpv_nonavalente',
      'dtpa_vip',
      'meningococica_b',
      'meningococica_acwy',
      'febre_amarela',
      'dengue',
      'hepatite_a',
      'hepatite_ab',
      'influenza_quadrivalente',
      'pneumococica_20',
      'pneumococica_15'
    ]
  },
  adulto: {
    title: 'Para Adultos',
    subtitle: '20-59 anos',
    icon: 'Users',
    highlights: ['herpes_zoster', 'hpv_nonavalente', 'vsr'],
    vaccines: [
      'herpes_zoster',
      'hpv_nonavalente',
      'vsr',
      'hepatite_ab',
      'dtpa',
      'triplice_viral',
      'varicela',
      'febre_amarela',
      'pneumococica_15',
      'influenza_quadrivalente',
      'meningococica_acwy',
      'meningococica_b',
      'pneumococica_20',
      'dengue'
    ]
  },
  gestante: {
    title: 'Para Gestantes',
    subtitle: 'Todas as idades',
    icon: 'Heart',
    highlights: ['vsr'],
    vaccines: [
      'vsr',
      'hepatite_b',
      'dtpa',
      'influenza_quadrivalente'
    ]
  },
  idoso: {
    title: 'Para Idosos',
    subtitle: '+60 anos',
    icon: 'Stethoscope',
    highlights: ['herpes_zoster', 'pneumococica_20'],
    vaccines: [
      'herpes_zoster',
      'pneumococica_20',
      'influenza_quadrivalente_60',
      'vsr',
      'dtpa',
      'pneumococica_15',
      'hepatite_ab',
      'meningococica_acwy',
      'influenza_quadrivalente'
    ]
  }
};
