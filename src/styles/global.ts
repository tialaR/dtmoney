import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33CC95;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #F0F2F5;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Estabelecendo/Configurando o tamanho de fonte da aplicação:
        => font-size: 16px
        => Por padrão o tamanho de fonte da aplicação vem como 16px. 16px é um tamanho ideal para desktop,
        ou seja, é um tamanho de fonte fácil de ler, etc..
        => Se quisermos mudar esse tamanho de fonte de acordo com a fonte que estivermos utilizando,
        também podemos mudar.*/
     html {
         //Qdo o usuário estiver c/ uma tela de até 1080px de largura
         @media (max-width: 1080px) {
            //Vou diminuir o font-size (16px * 0.9375 = 15px): 
            font-size: 93.65%;
         }

         //Qdo o usuário estiver c/ uma tela de até 720px de largura
         @media(max-width: 720px) {
             //Vou diminuir o font-size (16px * 0.875 = 14px): 
             font-size: 87.5%;
         }

         /* Por que diminuir a fonte?
         => Diminuir a fonte faz sentido em dispositivos menores.
         => Vamos utilizar uma unidade de medida no CSS que se chama rem 
            - 1REM === font-size (Um REM é igual ao tamanho do font-size da nossa página, ou seja,
            se o font-size da minha página for 16px 1rem será igual a 16px)
            - Se eu estou diminuindo o meu font-size conforme o tamanho da tela do usuário,
            se eu utilizar o rem para definir o tamanho dos botões, das imagens, da logo, etc na minha
            aplicação, toda aplicação vai de certa forma se adaptando melhor conforme o tamanho 
            da tela do usuário (a aplicação vai diminuindo conforme a tela do usuário for
            diminuindo também).
            - Essa é uma ótima pratica no CSS para conseguir adaptar a nossa interface de acordo com
            o tamanho da tela do nosso usuário.
        => Devemos utilizar percentual ao invés de pixel na medida das fontes porque caso o usuário
        esteja com algum tipo de configuração no celular ou no computador de aumentar ou diminuir a 
        fonte o percentual vai aumentar ou diminuir a fonte de acordo com a preferencia do usuário. Caso
        utilizasse-mos os pixels poderia prejudicar questões de acessibilidade por exemplo, pois assim
        o valor do pixel seria fixado.. diferente da porcentagem que iria se adaptar ao ambiente 
        configurado pelo usuário.
          */
     }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: bold;
    }
    

    button {
        cursor: pointer;
    }

    //Para tudo q/ estiver desabilitado na aplicação
    [disabled] {
        opacity: 0.6;
        
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.5s;

        &:hover {
            filter: brightness(0.5);
        }
    }
`;