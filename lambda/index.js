// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

var tab0 = new Array(
			"Caros amigos, ",
			"Por outro lado, ",
			"Assim mesmo, ",
			"No entanto, não podemos esquecer que ",
			"Do mesmo modo, ",
			"A prática cotidiana prova que ",
			"Nunca é demais lembrar o peso e o significado destes problemas, uma vez que ",
			"As experiências acumuladas demonstram que ",
			"Acima de tudo, é fundamental ressaltar que ",
			"O incentivo ao avanço tecnológico, assim como ",
			"Não obstante, ",
			"Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se ",
			"Pensando mais a longo prazo, ",
			"O que temos que ter sempre em mente é que ",
			"Ainda assim, existem dúvidas a respeito de como ",
			"Gostaria de enfatizar que ",
			"Todavia, ",
			"A nível organizacional, ",
			"O empenho em analisar ",
			"Percebemos, cada vez mais, que ",
			"No mundo atual, ",
			"É importante questionar o quanto ",
			"Neste sentido, ",
			"Evidentemente, ",
			"Por conseguinte, ",
			"É claro que ",
			"Podemos já vislumbrar o modo pelo qual ",
			"Desta maneira, ",
			"O cuidado em identificar pontos críticos n",
			"A certificação de metodologias que nos auxiliam a lidar com "
		);

var tab1 = new Array(
			"a execução dos pontos do programa ",
			"a complexidade dos estudos efetuados ",
			"a contínua expansão de nossa atividade ",
			"a estrutura atual da organização ",
			"o novo modelo estrutural aqui preconizado ",
			"o desenvolvimento contínuo de distintas formas de atuação ",
			"a constante divulgação das informações ",
			"a consolidação das estruturas ",
			"a consulta aos diversos militantes ",
			"o início da atividade geral de formação de atitudes ",
			"o desafiador cenário globalizado ",
			"a mobilidade dos capitais internacionais ",
			"o fenômeno da Internet ",
			"a hegemonia do ambiente político ",
			"a expansão dos mercados mundiais ",
			"o aumento do diálogo entre os diferentes setores produtivos ",
			"a crescente influência da mídia ",
			"a necessidade de renovação processual ",
			"a competitividade nas transações comerciais ",
			"o surgimento do comércio virtual ",
			"a revolução dos costumes ",
			"o acompanhamento das preferências de consumo ",
			"o comprometimento entre as equipes ",
			"a determinação clara de objetivos ",
			"a adoção de políticas descentralizadoras ",
			"a valorização de fatores subjetivos ",
			"a percepção das dificuldades ",
			"o entendimento das metas propostas ",
			"o consenso sobre a necessidade de qualificação ",
			"o julgamento imparcial das eventualidades "
		);

var tab2 = new Array(
			"nos obriga à análise ",
			"cumpre um papel essencial na formulação ",
			"exige a precisão e a definição ",
			"auxilia a preparação e a composição ",
			"garante a contribuição de um grupo importante na determinação ",
			"assume importantes posições no estabelecimento ",
			"facilita a criação ",
			"obstaculiza a apreciação da importância ",
			"oferece uma interessante oportunidade para verificação ",
			"acarreta um processo de reformulação e modernização ",
			"pode nos levar a considerar a reestruturação ",
			"representa uma abertura para a melhoria ",
			"ainda não demonstrou convincentemente que vai participar na mudança ",
			"talvez venha a ressaltar a relatividade ",
			"prepara-nos para enfrentar situações atípicas decorrentes ",
			"maximiza as possibilidades por conta ",
			"desafia a capacidade de equalização ",
			"agrega valor ao estabelecimento ",
			"é uma das consequências ",
			"promove a alavancagem ",
			"não pode mais se dissociar ",
			"possibilita uma melhor visão global ",
			"estimula a padronização ",
			"aponta para a melhoria ",
			"faz parte de um processo de gerenciamento ",
			"causa impacto indireto na reavaliação ",
			"apresenta tendências no sentido de aprovar a manutenção ",
			"estende o alcance e a importância ",
			"deve passar por modificações independentemente ",
			"afeta positivamente a correta previsão "
		);

var tab3 = new Array(
			"das condições financeiras e administrativas exigidas.",
			"das diretrizes de desenvolvimento para o futuro.",
			"do sistema de participação geral.",
			"das posturas dos órgãos dirigentes com relação às suas atribuições.",
			"das novas proposições.",
			"das direções preferenciais no sentido do progresso.",
			"do sistema de formação de quadros que corresponde às necessidades.",
			"das condições inegavelmente apropriadas.",
			"dos índices pretendidos.",
			"das formas de ação.",
			"dos paradigmas corporativos.",
			"dos relacionamentos verticais entre as hierarquias.",
			"do processo de comunicação como um todo.",
			"dos métodos utilizados na avaliação de resultados.",
			"de todos os recursos funcionais envolvidos.",
			"dos níveis de motivação departamental.",
			"da gestão inovadora da qual fazemos parte.",
			"dos modos de operação convencionais.",
			"de alternativas às soluções ortodoxas.",
			"dos procedimentos normalmente adotados.",
			"dos conhecimentos estratégicos para atingir a excelência.",
			"do fluxo de informações.",
			"do levantamento das variáveis envolvidas.",
			"das diversas correntes de pensamento.",
			"do impacto na agilidade decisória.",
			"das regras de conduta normativas.",
			"do orçamento setorial.",
			"do retorno esperado a longo prazo.",
			"do investimento em reciclagem técnica.",
			"do remanejamento dos quadros funcionais."
		);

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'Bem vindo ao fabuloso gerador de lero lero. Posso gerar qualquer quantidade de texto vazio e difuso. Quantas frases você deseja?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

function lerolero(quantidade){
	var textoSaida = "";
	for (var i = 0; i < quantidade; i++){
        var nM = Math.random(); //Numero Magico
        let p0 = tab0[Math.floor(nM * tab0.length)];
		let p1 = tab1[Math.floor(nM * tab1.length)];
		let p2 = tab2[Math.floor(nM * tab2.length)];
		let p3 = tab3[Math.floor(nM * tab3.length)];
		textoSaida = textoSaida.concat(p0, p1, p2, p3, " ");
	}
    return textoSaida;
}

const LeroLeroIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'LeroLeroIntent';
    },
    handle(handlerInput) {
        const quantFrases = handlerInput.requestEnvelope.request.intent.slots.quantidade.value;
        var saida = lerolero(quantFrases);
        return handlerInput.responseBuilder
            .speak(saida)
            .getResponse();
    }
};


const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'É só me dizer quantas frases você quer que eu gere.';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Adeus!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const speechText = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speechText = `Desculpe, eu não entendi oque você quis dizer, pode repetir?`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

// This handler acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        LeroLeroIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
    .lambda();
