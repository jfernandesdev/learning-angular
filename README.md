# Estudos de Angular (version 15.2.5)

## Roadmap

  - [x] `Fundamentos do Angular`:
    - Um `framework` com base na linguagem Javascript;
    - Utilizado para criação de `SPAs`;
    - Possuo arquitetura baseada em `componentes`;
    - Muito utilizado em aplicações de `grande porte`;
    - Compõe a stack `MEAN` (MongoDB, Express, Angular, NodeJs);
    - `Angular 2+` é uma versão diferente do AngularJS (clássico);
    - `Estrutura de organização` do projeto bem definida, promove simplicidade e reaproveitamento de código;
    - Sistema de `tooling` muito rico: CLI, módulo de HTTP, router e outros;
    - Integração nativa com `TypeScript`;
    - Mantido pelo `Google`.

  - [x] `Angular CLI`: Para começar um projeto Angular, vou usar o Angular CLI, uma ferramenta de linha de comando usada para criar, gerenciar e manter projetos Angular. Vou aprender a criar um novo projeto usando o Angular CLI.
    ```powershell
      # Instalar o CLI do Angular
      npm install -g @angular/cli

      # Criar um projeto
      ng new name-app

      ng serve
    ```

  - [x] `Componentes`: Para criar componentes, que são a base do desenvolvimento de aplicativos Angular, vou estudar como criar e usar componentes em meus projetos.
    ```powershell
      # Criar um novo componente
      ng generate component my-component

      # ou na forma simplificado
      ng g c my-component
    ```

  - [x] `Diretivas`: Vou aprender sobre as diretivas do Angular, recursos poderosos que me permitirão criar funcionalidades personalizadas e reaproveitáveis em meus aplicativos. 
    - `ngIf`: a diretiva ngIf é usada para mostrar ou ocultar um elemento do DOM com base em uma condição booleana. Por exemplo:
      ```html
      <div *ngIf="mostrarMensagem">Olá, mundo!</div>
      ```

    - `ngFor`: a diretiva ngFor é usada para criar repetições de elementos com base em uma lista ou matriz de dados. Por exemplo:
      ```html
      <ul>
        <li *ngFor="let item of listaDeItens">{{ item }}</li>
      </ul>
      ```

    - `ngStyle`: a diretiva ngStyle é usada para aplicar estilos a um elemento com base em uma expressão. Por exemplo:
      ```html
      <div [ngStyle]="{ 'background-color': '#FFF', 'color': '#000' }">Olá, mundo!</div>
      ```

    - `ngClass`: a diretiva ngClass é usada para aplicar uma ou mais classes CSS a um elemento com base em uma expressão. Por exemplo:
      ```html
      <div [ngClass]="{ 'destaque': estaDestacado, 'ativo': estaAtivo }">Olá, mundo!</div>
      ```

  - [ ] `Serviços`: Os serviços do Angular são usados para fornecer dados ou funcionalidades em toda a aplicação. Vou estudar como criar e usar serviços em meus projetos.

  - [ ] `Roteamento`: O roteamento é importante para navegar entre as páginas de um aplicativo Angular. Vou aprender a configurar o roteamento em um aplicativo Angular.

  - [ ] `Formulários`: Vou estudar como criar e validar formulários em um aplicativo Angular, já que eles são usados em quase todos os aplicativos web.

  - [ ] `Observables`: Para lidar com eventos assíncronos no Angular, vou aprender a trabalhar com observables.

  - [ ] `Testes`: Vou estudar como criar e executar testes em um aplicativo Angular, já que os testes são uma parte essencial do desenvolvimento de aplicativos.

  - [ ] `Desenvolvimento avançado`: Para me aprofundar em recursos avançados do Angular, como animações, injeção de dependência, interação com APIs RESTful, etc, vou continuar estudando e praticando para aprimorar minhas habilidades.
