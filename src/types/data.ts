interface Image {
  png: {
    small: string;
    big: string;
  };
  webp: {
    small: string;
    big: string;
  };
}

export interface Data {
  id: number;
  img: {
    cards?: Image;
    table: Image;
  };

  today: {
    title: string;
    likes: number;
    comments: number;
  };

  date: {
    title: string;
    likes: number;
    comments: number;
  };

  status: string;
  created: string;
}
