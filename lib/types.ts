export type Note = {
  id: string;
  content: string;
  hasPassword: boolean;
};

export interface Dictionary {
  main: {
    description: string;
    description2: string;
    input: {
      placeholder: string;
      length: string;
    };
    option: {
      button: string;
      option: string;
      option2: string;
      password: string;
      password_description: string;
      password_placeholder: string;
      confirm_password: string;
      confirm_password_description: string;
      confirm_password_placeholder: string;
      error: string;
    };
    url: {
      title: string;
      description: string;
    };
    error: {
      title: string;
    };
  };
  note: {
    password: {
      title: string;
      placeholder: string;
      button: string;
    };
    error: {
      title: string;
    };
  };
}

export interface LegalDictionary {
  metadata: {
    title: string;
    description: string;
  };
  title: string;
  lastModified: string;
  sections: {
    [key: string]: {
      title: string;
      content: string | string[];
      list?: string[];
    };
  };
}
