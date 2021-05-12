<div class="banner-wrap">
    <div style="color:#000000" class="blue-bg">
        <h1>
            Designing a Bot builder
        </h1>
        <p class="project-desc">
            System design for a chatbot builder
        </p>
        <p class="project-date">
            [24]7.ai  2018 Dec - 2019 Apr
        </p>
        <div class="overflow-image">
            <img src="/images/Alden/alden_project_main.jpg" alt="Alden case study images"/>
            <span style="background-color:#4EBEA5"></span>
        </div>
    </div>
</div>
<div class="resp-container">
    <div class="resp-row">
        <div class="resp-title">
            Project <br/>overview
        </div>
        <div class="resp-desc">
            <p>
                Technology for a market as large as the Business Process Outsourcing (BPO) industry is developing at a fast pace, and there are many firms pairing AI with ‘big data to replace BPOs. Customers today demand the hyper-personalization of everything. When an understanding of customer preference, structured and unstructured customer data, conversations in and across all channels is leveraged, this personalization can be achieved. In the last 2 decades, BPO was synonymous with call centers. This is an outdated notion. A huge chunk of BPO organizations has invested in new technologies to match the skill shortage.  
            </p>
        </div>
    </div>
    <div class="resp-row">
        <div class="resp-title">
            What is [24]7.ai
        </div>
        <div class="resp-desc">
            <p>
                There’s a scenario agent launches the “bot-let” to resolve the issue faster, the flow is detailed in the link. AIVA engages the user first to start the conversation. Aiva identifies the intent and immediately hands it over to the agent from where the agent takes over. The agent assists the user to identify the issue and supports it manually. Once the issue is resolved, the agent requests the user to make the payment and deploys a payment bot-let. The bot-let gets stuck as the user wants to make the payment with a card different from the one that is saved. A notification is sent to the agent that the bot-let is stuck. Agent asks for card details and assists the user with payment. 
            </p>
            <h4 style="margin-top:40px" class="in-header">
                [24]7 Solutions
            </h4>
            <div class="img-col-1 space-top-40 screeshot-wrapper">
                <img src="/images/botbuilder/bb1.jpg" alt="247 products"/>
            </div>
            <h5>
                [24]7 CustomerJourney Analytics
            </h5>
            <p>
                This SaaS solution tracks and analyzes the way consumers interact with companies, making it easier to leverage insights from Big Data to drive continuous, measurable improvements across all customer experience touchpoints.
            </p>
            <h5>
                [24]7 Personalization
            </h5>
            <p>
                 A powerful machine-learning system that combines retargeting and predictive targeting to dynamically deliver ads with 200 percent better engagement than generic ads.[24]7 Predictive Search Bidding Our bidding engine automatically models the true value of search clicks and uses intent data to optimise campaign performance and deliver personalised customer journeys.
            </p>
            <h5>   
                [24]7 Active Share
            </h5>
            <p>
                The ‘online canvas’ that provides rich visual experiences where a voice caller and agent can interact during a call.
            </p>
            <h5>
                [24]7 Chat
            </h5>
            <p>
                The smart chat platform combines predictive models, intelligence, and rich content to make customer service and sales conversations intuitive and effective.
            </p>
            <h5>   
                [24]7 Digital Chat Agents
            </h5>
            <p>
                The world’s best human talent combined with enabling technology creates brilliant customer experience and highly optimised performance.
            </p>
            <h5>
                [24]7 Platform
            </h5>
            <p>
                The AI platform transforms data into decisions to create intent-driven experiences that are highly personalised—across channels, journeys, and devices.
            </p>
            <h5>   
                [24]7 AIVA
            </h5>
            <p>
                The AI-powered virtual agent that works across both speech (IVR) and digital (chatbot) channels, enabling companies to build once and deploy anywhere.
            </p>
        </div>
    </div>
    <div class="resp-row">
        <div class="resp-title">
            What I 
            <br/>
            Had to do
        </div>
        <div class="resp-desc">
            <p>
                Currently for each client, deploying a chatbot is a 4 week - manual labor-intensive - hard-coded method. This currently is an independent flow based on the data platform alone. None of the other abilities are currently integrated into the bot
                <br/>
                <br/>
                My role was to design a system that can leverage and integrate the existing products and automate the workflow of creating a client specific chat-bot. 
            </p>
        </div>
    </div>
    <div class="resp-row">
        <div class="resp-title">
            What is a 
            <br/> 
            conversation?
        </div>
        <div class="resp-desc">
            <p>
                A conversation is mostly and informal communication between two or more participants. They have to cooperate to keep a conversation live. The instinct of a human to behave cooperatively is to be understood and exploited. The human expects cooperation from not just people but also software he’s intreating with. So the software which we create need to follow similar guidelines to make the conversation sound more cooperative and less inhuman.
            </p>
        </div>
    </div>
    <div class="resp-row">
        <div class="resp-title">
            The Concept
        </div>
        <div class="resp-desc">
            <p>
                In 247’s context, the experience of conversation design can be looked at from 2 broad perspectives: 
                <br/>
                1. Conversation Experience 
                <br/>
                2. Bot Design Experience 
                <br/>
                <br/> 
                This leads to designing the experience for two user groups:
                <br/> 
                1. The person who interacts with the bot
                <br/> 
                2. The person who builds the bot.
            </p>
        </div>
    </div>
    <div class="resp-row">
        <div class="resp-title">
            What is a good 
            <br/>
            Conversation 
            <br/> 
            Experience?
        </div>
        <div class="resp-desc">
            <p>
                Paul Grice was a British philosopher of language. His work on meaning has influenced the philosophical study of semantics. According to his studies and publications,There are set rules which can create/sustain a good conversation.
            </p>
            <h5>
                Cooperative Principles
            </h5>
            <p>
                The cooperative principle describes how effective communication in conversation is achieved, that is, how listeners and speakers must act cooperatively and mutually accept one another to be understood in a particular way.
            </p>
            <h5>
                Theory of implicature
            </h5>
            <p>
                The speakers make implicatures and listeners make inferences. This sustains a conversation until the listener can infer from the speaker’s words. The system should be able to infer what the user intends to communicate. This leads to building intention-based semantics.
            <br/>
            <br/>
                There could be a natural and non-natural meaning intended by the utterer ( the user ). This meaning should be inferred by the system to provide the user with the right response. The user could be “saying” certain things in a colloquial way which has to be elucidated by the system and mapped to what he/she is “meaning” to say.
            </p>
            <h5>
                The maxim of Quantity
            </h5>
            <p>
                Make the contribution as informative as is required for the current purposes of the exchange.
                Do not make a contribution more informative than is required.
            </p>
            <h5>  
                Maxim of Quality: Truth
            </h5>
            <p>
                Do not say what you believe to be false. Do not say that for which you lack adequate evidence.
            </p>
            <h5>
                Maxim of Relation: Relevance
            </h5>
            <p>
                Be relevant.
            </p>
            <h5>
                Maxim of Manner: Clarity
            </h5>
            <p>
                (“be perspicuous”)
                <br/>
                Avoid obscurity of expression. Avoid ambiguity. Be brief (avoid unnecessary prolixity). Be orderly
                <br/>
                <br/>
                The Maxim of Quantity and Manner is what we could most use in designing a conversation for an artificially intelligent system. The Maxim of Quality and Relevance are taken for granted as the system would speak based on data.
            </p>
        </div>
    </div>
    <div class="space-block">
    </div>
    <div class="resp-row">
        <div class="resp-title">
            Setting 
            <br/> 
            Ground Rules
        </div>
        <div class="resp-desc">
            <p>Building upon these principles, additional factors can be considered which could make a conversation better: 
                <br/>
                <br/>
                Providing info, just the right quantity to fill in the likely gap in the user’s knowledge base could help in a positive engagement. Paraphrasing helps if the information has to be repeated - Progressive disclosure. Being accommodative of user’s errors. Don’t tell the user what to say. Do not burden the users with the cognitive load of what certain commands do.
                <br/> 
                <br/> 
                Too much info = Irrelevant = Uncooperative
                <br/>
                <br/> 
                A good conversation participant also has a memory of previous turns in the interaction and also contextual awareness of their interlocutor: 
                <br/> 
                1. This means the system should know the business.
                <br/> 
                2. Why is the user participating in the conversation; Also 
                <br/> 
                3. When and Why the user contacted the last time!
                <br/>
                <br/> 
                Avoid Tech-splaining and Respect limits of short-term memory are also fundamental to a good conversation experience. 
                <br/>
                <br/> 
                Sometimes the user doesn’t have time or choice to skip.
            </p>
        </div>
    </div>
    <div class="space-block">
    </div>
    <div class="resp-row">
        <div class="resp-title">
            Botlet - Agent
            <br/>
            Blended
            <br/>
            Experience
        </div>
        <div class="resp-desc">
            <p>
                In a scenario where the agent and Botlet take turns to complete the process, what should the experience be like? 
                <br/>
                <br/>
                This is a question which I started with.
                <br/> 
                <br/> 
                The word meaning “Chatbot” is a computer program designed to simulate conversation with human users, especially over the Internet. What’s underlying this meaning is that the program understands the conversation with the human and decides what to speak next. However, in the case of blended experience, the agent subdivides his work to get all the standard workflows done using a linear flow which we call “Botlet”, for example, making a payment. 
                <br/>
                <br/> 
                The moment the term BOT is associated with it, there are a set of expectations that comes with it. This also forces the program to comply with all the rules which a bot does. 
                <br/> 
                <br/> 
                “This raises the curiosity for a question, is the name BOTLET appropriate? 
                <br/> 
                If it’s a linear workflow and it’s not taking any decision, should it even be called as a BOT?”
            </p>
        </div>
    </div>
    <div class="space-block">
    </div>
    <div class="resp-row">
        <div class="resp-title">
            Testing
            <br/>
            Protocol
        </div>
        <div class="resp-desc">
            <p>
                While looking at research reports published by the [24]7 design studio, it appears that the bot is not voted as the best available in the market. On further analysis, it also appears that the result is a consequence of multiple factors, not just the conversation design. 
                <br/>
                <br/>
                While the user appreciates a fine conversation, he/she is most bothered about getting a resolution for the intent. In our case, the bot is sometimes not even able to identify if the user paraphrases and points out an intent. 
                <br/> 
                <br/>
                Testing just for finding different conversations might not be the right approach, why?
                <br/>
                ) To get an absolute result, the same user should all variations of the conversation. 
                <br/>
                2) User A testing conversation A and user B testing conversation B won’t produce an accurate result.
                <br/>
                3) None of this would matter if the issue would not be resolved. 
                <br/>
                <br/>
                To move ahead: 
                <br/>
                Step 1: Identify the most commonly failed intents from the previous test report, 
                <br/>
                Step 2: Find out why it is failing. 
                <br/>
                Step 3: Categorise the reasons for failure into: 
                <br/>
                a) Conversation quality
                <br/> 
                b) Intent identification
                <br/>
                c) Other areas
                <br/>
                <br/>
                Step 4: Identify which is the most occurring reason for failure
                <br/>
                Step 5: If it’s the quality of conversation, fix that and re-test.
                <br/>
                Step 6: Improve other factors in the backend.   
                <br/>
                <br/>
                A beautifully designed conversation is of no use if the primary purpose is not taken care of
            </p>   
        </div>
    </div>
    <div class="space-block">
    </div>
    <div class="resp-row">
        <div class="resp-title">
            Looking at 
            <br/>
            A Scenario
        </div>
        <div class="resp-desc">
            <p>
                There’s a scenario agent launches the “bot-let” to resolve the issue faster, the flow is detailed in the link. AIVA engages the user first to start the conversation. Aiva identifies the intent and immediately hands it over to the agent from where the agent takes over. The agent assists the user to identify the issue and supports it manually. Once the issue is resolved, the agent requests the user to make the payment and deploys a payment bot-let. The bot-let gets stuck as the user wants to make the payment with a card different from the one that is saved. A notification is sent to the agent that the bot-let is stuck. Agent asks for card details and assists the user with payment. 
            </p>
            <h4 style="margin-top:40px" class="in-header">Proposed Optimisation</h4>
            <div class="img-col-1">
                <img src="/images/botbuilder/bb2.png" alt="wireframe Image 1"/>
            </div>
        </div>
    </div>
    <div class="space-block">
    </div>
    <div class="resp-row">
        <div class="resp-title">
            Alternatively,
            <br/>
            The blended
            <br/>
            Experience
        </div>
        <div class="resp-desc">
            <p>
                In a practical situation, certain scenarios are easy to automate and execute by the bot and others require a human intervention, the blended experience can be adopted. The bot takes care of the repeated and easy-to-handle cases while the agent takes care of the remaining.
                <br/>
                <br/>
                However, the best experience for the visitor while the agent and bot are taking turns to resolve is still unknown. How to let the visitor know who is helping him/her without being intrusive is the challenge at hand. The following methods can be detailed out and tested to find the best outcome.
            </p>
            <h4 style="margin-top:30px" class="in-header">Proposed Optimisation</h4>
            <p>
                1. The user is provided with transparency in who is on the other end of the conversation, I.e., if it’s a bot, we convey that it’s a bot.
                <br/>
                2. The user is told that the entire conversation Is handled by an agent. All the blending happens behind the screens without letting the user know. 
                <br/>
                3. The user is told that the entire conversation is handled by a bot. All the blending happens behind the screens without letting the user know.
                <br/>
                <br/>
                While the flow for methods 2 and 3 is straightforward, there could be variations for method 1 in terms of visual elements, interactions, etc. Telling the user that an agent is taking care of the whole thing while the bot takes care of the standard flows might not be possible as a law is coming into effect from June in California stating that any bot interactions have to be explicitly mentioned.
            </p>
            <div class="img-col-1">
                <img src="/images/botbuilder/bb3.jpg" alt="wireframe Image 1"/>
            </div>
        </div>
    </div>
    <div class="space-block">
    </div>
    <div class="resp-row">
        <div class="resp-title">
            Product Design:
            <br/>
            Bot Builder
        </div>
        <div class="resp-desc">
            <p>
                The objective of this is to standardize the conversation contained in the long run. To onboard a client and deploy an AIVA instance within minutes is the expected outcome. 
                <br/>
                <br/>
                Every intent the visitor comes in with has a resolution. There could be multiple resolutions to each intent, but there is at least one. 
                The conversation path which connects the intent-resolution pair could be different for even the same pair. This varies based mainly on two categories:
                <br/>
                Visitor’s profile & Bot’s Profile
                <br/>
                <br/>
                The parameters that define the conversation can be made configurable such that for every intent-resolution pair, there exists a few variants of a standardized conversation.
            </p>
            <div class="img-col-1">
                <img src="/images/botbuilder/bb4.png" alt="wireframe Image 1"/>
            </div>
        </div>
    </div>
    <div class="space-block">
    </div>
    <div class="resp-row">
        <div class="resp-title">
            Character
            <br/>
            of the bot
        </div>
        <div class="resp-desc">
            <p>
                The configurable parameters make the bot behave in different ways for the same intent-resolution par. This means a user is essentially changing the character or the personality of the bot. The foundation of behavioural patterns is based on agent training. This also ensures that the agent and the bot provide a similar experience for the visitor.
            </p>
            <div class="img-col-1">                        
                <img src="/images/botbuilder/bb5.png" alt="wireframe Image 1"/>
            </div>
        </div>
    </div>
    <div class="resp-row">
        <div class="resp-title">
            What next?
        </div>
        <div class="resp-desc">
            <p>
                The above-identified parameters can be converted into a UI. This will reduce the process of deployment of a bot from 4 weeks to a few hours. More parameters could be identified in the process of evolution to make the bot tailor-made to suit each client’s brand positioning and need.
            </p> 
        </div>
    </div>
</div>