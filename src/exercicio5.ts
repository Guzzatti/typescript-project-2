class Publicacao {
    protected titulo: string;
    protected autor: string;
    protected descricao: string;
  
    constructor(titulo: string, autor: string, descricao: string) {
      this.titulo = titulo;
      this.autor = autor;
      this.descricao = descricao;
    }
  
    exibirResumo(): string {
      return `Título: ${this.titulo}\nAutor: ${this.autor}\nDescrição: ${this.descricao}`;
    }
  }
  
  class Artigo extends Publicacao {
    private numeroDePalavras: number;
  
    constructor(titulo: string, autor: string, descricao: string, numeroDePalavras: number) {
      super(titulo, autor, descricao);
      this.numeroDePalavras = numeroDePalavras;
    }
  
    exibirResumo(): string {
      return `${super.exibirResumo()}\nNúmero de Palavras: ${this.numeroDePalavras}`;
    }
  }
  
  class Video extends Publicacao {
    private duracao: number;
  
    constructor(titulo: string, autor: string, descricao: string, duracao: number) {
      super(titulo, autor, descricao);
      this.duracao = duracao;
    }
  
    exibirResumo(): string {
      return `${super.exibirResumo()}\nDuração: ${this.duracao} minutos`;
    }
  }
  
  const artigo = new Artigo("Introdução ao TypeScript", "Gabriel Guzzatti", "Um artigo sobre TypeScript", 1200);
  console.log(artigo.exibirResumo());
  
  const video = new Video("Cover de Paraíso Proibido", "Gabriel Guzzatti", "Um cover da música paraíso proibido, do Strike", 5);
  console.log(video.exibirResumo());