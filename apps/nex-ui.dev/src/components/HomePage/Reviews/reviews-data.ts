export interface ReviewData {
  title: string;
  body: string;
  link: string;
  author: {
    avatar: string;
    nickname: string;
  };
}

export const reviews: ReviewData[] = [
  {
    title: 'You nailed it!',
    body: "<p>Man, I've been doing Front-End for 2 years. This is, hands-down, the best component library I've ever used. What's more, the parts that I didn't like (Styling from JS Objects, slow with big forms) have been addressed in v7. Please keep it up, this library deserves more exposure, it just works and works well and beautifully. Many thanks to <a href='https://github.com/rtivital' target='_blank'>@rtivital</a> and the contributors!</p>",
    link: '-',
    author: {
      nickname: 'diar',
      avatar: 'https://media.licdn.com/dms/image/v2/C5603AQG7Ym5QVmh79w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1625823563645?e=2147483647&v=beta&t=buv-TXBWD-EIX8wcOpQ_ovEClrAZuRSR4N9OeAQsYLI',
    },
  },
  {
    title: "One of the best UI libraries I've come across.",
    body: '<p>I am a senior Frontend Developer and wanted to use something new instead of Material UI and came across this, it has been well thought of all the different scenarios you and come across, and the hooks are just pure love :)</p><p>Thank you so much for this.</p>',
    link: 'https://github.com/orgs/mantinedev/discussions/5783',
    author: {
      nickname: 'hilal',
      avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQGrKzLtjpfU2g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1715735762505?e=1743033600&v=beta&t=gZCNd3qEnji-NzPAkqo_uk4VSk06zUxH3vlOefSAV2g',
    },
  },
  {
    title: 'Thank you Nex UI 💘',
    body: '<p>Dear Nex UI Team, thank you for putting this library together. I have started to use and love Nex UI in my free time, and bringing this great library to good use in our company now. All the developers are very pleased with the development experience, the time savings for any bigger project is insane. The amount of flexibility we have with our designers and developers will result in great products. All thanks to every contributor. Continue the good work!</p>',
    link: '-',
    author: {
      nickname: 'fathin',
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQHHg9vIth6VQQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714865864983?e=1743033600&v=beta&t=l87smYXq6a1zPjMGYfLLfnZeG4F7NHf2tj7kYIkjeko',
    },
  },
  {
    title: 'Thank you Nex UI!',
    body: '<p>Out of all react component libraries that I have ever seen this one is the most straight forward, easy to use, well documented and really beautiful. I plan on switching and using this full time. Just wanted to say huge thanks to the people that made this.</p>',
    link: 'https://github.com/orgs/mantinedev/discussions/259',
    author: {
      nickname: 'mr.dorayaki',
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQHsqGp8ciN6RA/profile-displayphoto-shrink_100_100/B56ZONjIXkGgAY-/0/1733246619268?e=1743033600&v=beta&t=HuCWqJ_oyIq-48x2OwRgDk5awhYLeynr5h_UBZXBxkk',
    },
  },
  {
    title: 'Nex UI >>>',
    body: "<p>I started using Nex UI for a personal project and it covers so many cases!! Enjoying every part of it so far and can't wait to get more in-depth with it.</p>",
    link: 'https://github.com/orgs/mantinedev/discussions/6219',
    author: {
      nickname: 'iqbal',
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQH7KNI_qDfTAw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1688942815922?e=1743033600&v=beta&t=0G8-RDHuGkCuk8tWFHfzSufJRV9whH5t-nGlc32uFKc',
    },
  },
];
