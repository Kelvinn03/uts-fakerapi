const { Image } = require('../../../models');

async function seedInitialData() {
  const images = [
    {
      title: 'Aut itaque consequuntur eos.',
      description:
        'Et voluptas qui molestiae iusto harum. Doloribus unde quis alias fugiat. Qui voluptas at nesciunt eum.',
      url: 'https://picsum.photos/640/480',
      _locale: 'en',
    },
    {
      title: 'Soluta esse quia optio.',
      description:
        'Eum ullam quis iusto velit dolore nesciunt necessitatibus. Modi explicabo exercitationem inventore eaque. Quibusdam velit velit odio maxime.',
      url: 'https://picsum.photos/640/480',
      _locale: 'en',
    },
    {
      title: 'Iure debitis neque ea ipsa.',
      description:
        'Dolores velit ducimus et neque quam fuga. Temporibus sit quia rerum eligendi voluptatum rerum. Esse quisquam nulla dolorum enim fugit. A rerum eligendi facilis facere expedita in.',
      url: 'https://picsum.photos/640/480',
      _locale: 'en',
    },
    {
      title: 'Eum ab odio enim ad ipsa.',
      description:
        'Molestias nam delectus iure nam voluptate quaerat nesciunt consectetur. Blanditiis voluptas enim nostrum sunt assumenda molestiae. Optio optio dolorem velit officiis quod at rerum.',
      url: 'https://picsum.photos/640/480',
      _locale: 'en',
    },
    {
      title: 'Impedit quasi id alias error.',
      description:
        'In quo quibusdam similique beatae. Recusandae tempora omnis id est consequatur qui in in. Culpa vel quos consequuntur.',
      url: 'https://picsum.photos/640/480',
      _locale: 'en',
    },
    {
      title: 'Et nisi aut aliquid.',
      description:
        'Quaerat in iste consequatur delectus sed. Iure sunt voluptatem error temporibus quia. Maiores sint commodi sequi incidunt provident sed temporibus. Aut vitae laborum inventore omnis.',
      url: 'https://picsum.photos/640/480',
      _locale: 'en',
    },
    {
      title: 'Et quam ab fuga assumenda ut.',
      description:
        'Velit neque minus alias soluta et officia. Est nihil accusamus molestias nemo in. Vel et id reprehenderit rerum. Odit est sint delectus maxime maxime.',
      url: 'https://picsum.photos/640/480',
      _locale: 'en',
    },
    {
      title: 'Quod dolores est omnis amet.',
      description:
        'Ut ratione consequatur nemo qui. Pariatur voluptas quod saepe voluptas incidunt. Odit doloribus dignissimos et laborum. Debitis iure consectetur voluptas ea in quis.',
      url: 'https://picsum.photos/640/480',
      _locale: 'en',
    },
    {
      title: 'Nam tenetur aut id inventore.',
      description:
        'Ut aliquam possimus ea quis tenetur fugit aut distinctio. Eaque id vel molestiae perferendis ea cupiditate non. Eum quae ut eaque maxime.',
      url: 'https://picsum.photos/640/480',
      _locale: 'en',
    },
    {
      title: 'Non unde sed dolorum velit.',
      description:
        'Voluptatem ducimus eaque et. Omnis molestiae expedita enim porro omnis dolores. Officiis voluptate dolorum voluptas nisi earum quod quam. Excepturi dolor laborum placeat maxime sit.',
      url: 'https://picsum.photos/640/480',
      _locale: 'en',
    },
  ];

  await Image.insertMany(images);
}

async function isDataSeeded() {
  const count = await Image.countDocuments();
  if (count >= 0) {
    await Image.deleteMany({});
    await seedInitialData();
  }
}

module.exports = {
  seedInitialData,
  isDataSeeded,
};
