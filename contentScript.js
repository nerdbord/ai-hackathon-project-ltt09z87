function dodajPrzyciskZdecyduj() {
  const button = document.createElement('button')
  button.textContent = 'Zdecyduj'
  button.className =
    'mgn2_14 mp0t_0a m9qz_yp mp7g_oh mse2_40 mqu1_40 mtsp_ib mli8_k4 mp4t_0 m3h2_0 mryx_0 munh_0 m911_5r mefy_5r mnyp_5r mdwl_5r msbw_2 mldj_2 mtag_2 mm2b_2 mqvr_2 msa3_z4 mqen_m6 meqh_en m0qj_5r mh36_16 mvrt_16 mg9e_0 mj7a_0 mjir_sv m2ha_2 m8qd_qh mjt1_n2 btfbp mgmw_9u msts_enp mrmn_qo mrhf_u8 m31c_kb m0ux_fp bp6m4 mupj_5k m7er_k4'
  button.style.margin = '10px'

  button.addEventListener('click', () => {
    const title = document.title;
    console.log(title);
    
    // Wysyłanie tytułu do endpointu /nazwa
    fetch('https://kamil-banaszek.pl/projekt/nazwa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nazwa: title }),
    })
    .then(response => response.text())
    .then(data => {
      console.log(data); // Odpowiedź z serwera
      alert("Przejdz do rozszerzenia, pobraliśmy aukcję!");
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
  });

  const container = document.querySelector('#transaction-buttons-section')
  if (container) {
    container.appendChild(button)
  }
}

window.addEventListener('load', () => {
  dodajPrzyciskZdecyduj()
})
