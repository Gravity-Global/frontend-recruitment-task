const getImagePath = () => {
  const clientWidth = window.innerWidth;

  if (clientWidth <= 480) return imagePathXs;
  else if (clientWidth <= 768) return imagePathS;
  else if (clientWidth <= 1024) return imagePathM;
  else return imagePathL;
};

const fetchUsersData = async () => {
  const response = await fetch(TABLE_DATA_URL);
  const data = await response.json();
  return data.map(
    ({
      name,
      email,
      address: { city, street, suite },
      phone,
      company: { name: companyName },
    }) => [name, email, `${city}, ${street}, ${suite}`, phone, companyName]
  );
};
