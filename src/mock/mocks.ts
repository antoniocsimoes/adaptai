import { FeedbackResume, Questions } from "../utils/types";

export const mockQuestions: Questions = 
    { 
        questions: [
            {
                questionId: 1,
                question: "Com os avanços tecnológicos e mudanças constantes no comportamento do consumidor, as empresas de varejo têm introduzido progressivamente estratégias de inovação no atendimento ao cliente por diferentes canais de comunicação, trazendo novos desafios, com a intenção de obter vantagem competitiva. Assim, à medida que as linhas entre os canais on-line e físicos estão se tornando cada vez mais transparentes, uma nova estratégia de canais está evoluindo, chamado de Omnichannel.",
                options: [
                    {
                        text: "É uma estratégia que foca no produto da empresa, mas permite que os clientes comprem esse produto em diferentes canais de comunicação, que atuam independentes uns dos outros.",
                        isCorrect: false
                    },
                    {
                        text: "É uma estratégia que envolve a comunicação e relacionamento da marca com seu público por meio de vários canais de comunicação não interligados.",
                        isCorrect: false
                    },
                    {
                        text: "É uma estratégia que estabelece o uso simultâneo e interligado de vários canais de comunicação sempre em sincronia.",
                        isCorrect: true
                    },
                    {
                        text: "É uma estratégia que aperfeiçoa o relacionamento da empresa com o consumidor por meio de canais de comunicação, porém utilizando apenas um canal de contato por vez.",
                        isCorrect: false
                    },
                    {
                        text: "É uma estratégia que opera múltiplos canais, mas os processos não são integrados e não há interface operacional ou logística entre os canais.",
                        isCorrect: false
                    }
                ]
            },
            {
                questionId: 2,
                question: "Qual é o maior mamífero do mundo?",
                options: [
                    {
                        text: "Elefante",
                        isCorrect: false
                    },
                    {
                        text: "Baleia azul",
                        isCorrect: true
                    },
                    {
                        text: "Girafa",
                        isCorrect: false
                    },
                    {
                        text: "Leão",
                        isCorrect: false
                    },
                    {
                        text: "Tubarão",
                        isCorrect: false
                    }
                ]
            }
        ]
    }

export const mockFeedback: FeedbackResume = {
    feedbacks: [
        {
            questionId: 1466903,
            suggestions: [
                {
                    content: 'https://www.google.com.br',
                    type: 'html'
                },
                {
                    content: 'https://www.youtube.com.br',
                    type: 'video'
                }
            ]
        },
        {
            questionId: 1467500,
            suggestions: [
                {
                    content: 'https://www.google.com.br',
                    type: 'html'
                },
                {
                    content: 'https://www.youtube.com.br',
                    type: 'video'
                }
            ]
        }
    ]
}