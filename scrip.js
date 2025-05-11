const kiritish = document.getElementById("kiritish");
const qoshishTugmasi = document.getElementById("qoshishTugmasi");
const royxat = document.getElementById("ro'yxat");

qoshishTugmasi.onclick = () => {
  const matn = kiritish.value.trim();
  if (matn === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = matn;

  const harakatlar = document.createElement("div");
  harakatlar.className = "harakatlar";

  const tahrir = document.createElement("i");
  tahrir.textContent = "✏️";
  tahrir.onclick = () => {
    if (confirm("Nomini o‘zgartirmoqchimisiz?")) {
      const yangiMatn = prompt("Yangi nom:", span.textContent);
      if (yangiMatn) span.textContent = yangiMatn;
    }
  };

  const ochirish = document.createElement("i");
  ochirish.textContent = "🗑️";
  ochirish.onclick = () => li.remove();

  harakatlar.append(tahrir, ochirish);
  li.append(span, harakatlar);
  royxat.appendChild(li);
  kiritish.value = "";
};