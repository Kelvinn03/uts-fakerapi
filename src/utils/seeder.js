const { allFakers } = require('@faker-js/faker');

async function seedData(model, quantity, chosenFields) {
  const locales = ['base', 'en', 'id_ID', 'de', 'fr', 'zh_CN', 'es'];

  await Promise.all(
    locales.map(async (locale) => {
      const data = Array.from({ length: quantity }, () =>
        chosenFields.reduce((item, field) => {
          const newItem = { ...item };
          switch (field) {
            // Person
            case 'name':
              newItem[field] = allFakers[locale].person.fullName();
              break;
            case 'firstName':
              newItem[field] = allFakers[locale].person.firstName();
              break;
            case 'lastName':
              newItem[field] = allFakers[locale].person.lastName();
              break;
            case 'gender':
              newItem[field] = allFakers[locale].person.gender();
              break;
            case 'jobTitle':
              newItem[field] = allFakers[locale].person.jobTitle();
              break;

            // Internet
            case 'email':
              newItem[field] = allFakers[locale].internet.email();
              break;
            case 'username':
              newItem[field] = allFakers[locale].internet.userName();
              break;
            case 'url':
              newItem[field] = allFakers[locale].internet.url();
              break;
            case 'ip':
              newItem[field] = allFakers[locale].internet.ip();
              break;
            case 'ipv6':
              newItem[field] = allFakers[locale].internet.ipv6();
              break;

            // Location
            case 'streetAddress':
              newItem[field] = allFakers[locale].location.streetAddress();
              break;
            case 'streetName':
              newItem[field] = allFakers[locale].location.street();
              break;
            case 'buildingName':
              newItem[field] = allFakers[locale].location.buildingNumber();
              break;
            case 'countryCode':
              newItem[field] = allFakers[locale].location.countryCode();
              break;
            case 'city':
              newItem[field] = allFakers[locale].location.city();
              break;
            case 'state':
              newItem[field] = allFakers[locale].location.state();
              break;
            case 'country':
              newItem[field] = allFakers[locale].location.country();
              break;
            case 'zipcode':
              newItem[field] = allFakers[locale].location.zipCode();
              break;
            case 'latitude':
              newItem[field] = allFakers[locale].location.latitude();
              break;
            case 'longitude':
              newItem[field] = allFakers[locale].location.longitude();
              break;

            // Phone
            case 'phone':
              newItem[field] = allFakers[locale].phone.number();
              break;

            // Company
            case 'company':
              newItem[field] = allFakers[locale].company.name();
              break;
            case 'companySuffix':
              newItem[field] = allFakers[locale].company.suffix();
              break;

            // Date
            case 'birthdate':
              newItem[field] = allFakers[locale].date.birthdate();
              break;
            case 'recentDate':
              newItem[field] = allFakers[locale].date.recent();
              break;
            case 'futureDate':
              newItem[field] = allFakers[locale].date.future();
              break;
            case 'pastDate':
              newItem[field] = allFakers[locale].date.past();
              break;

            // Text
            case 'sentence':
              newItem[field] = allFakers[locale].lorem.sentence();
              break;
            case 'paragraph':
              newItem[field] = allFakers[locale].lorem.paragraph();
              break;
            case 'word':
              newItem[field] = allFakers[locale].word.sample();
              break;

            // Finance / Commerce
            case 'price':
              newItem[field] = allFakers[locale].commerce.price();
              break;
            case 'creditCardNumber':
              newItem[field] = allFakers[locale].finance.creditCardNumber();
              break;
            case 'iban':
              newItem[field] = allFakers[locale].finance.iban();
              break;
            case 'bic':
              newItem[field] = allFakers[locale].finance.bic();
              break;

            // Music
            case 'musicGenre':
              newItem[field] = allFakers[locale].music.genre();
              break;
            case 'musicSong':
              newItem[field] = allFakers[locale].music.songName();
              break;
            case 'musicAlbum':
              newItem[field] = allFakers[locale].music.album();
              break;
            case 'musicArtist':
              newItem[field] = allFakers[locale].music.artist();
              break;

            // Misc
            case 'uuid':
              newItem[field] = allFakers[locale].string.uuid();
              break;
            case 'boolean':
              newItem[field] = allFakers[locale].datatype.boolean();
              break;

            // Default fallback
            default:
              newItem[field] = null;
          }
          if (newItem[field] === null || newItem[field] === undefined) {
            console.warn(
              `Field "${field}" not supported for locale "${locale}"`
            );
            return null;
          }

          return newItem;
        }, {})
      );
      if (data.length === 0) {
        console.warn(`No data generated for locale: ${locale}`);
        return;
      }

      data.forEach((item) => {
        // ignore lint error for this line
        item._locale = locale;
      });
      await model.insertMany(data);
    })
  );
}

module.exports = {
  seedData,
};
