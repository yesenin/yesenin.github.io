interface Verb {
    id: string;
    value: string;
    comment?: string | null;
    tags: string[];
    ru: string[];
    parent?: string | null;
    present: VerbConjugation;
    pastImperfective: VerbConjugation;
    aorist: VerbConjugation;
}

interface VerbForms {
    positive: string;
    negative: string;
}

type SingularPersons = 'singular 1st' | 'singular 2nd' | 'singular 3rd';
type PluralPersons = 'plural 1st' | 'plural 2nd' | 'plural 3rd';

type AllPersons = SingularPersons | PluralPersons;

type VerbConjugation = {
    [key in AllPersons]: VerbForms;
};

const ArmenianPronouns: [key: AllPersons, value: string][] = [
    ['singular 1st', 'ես'],
    ['singular 2nd', 'դու'],
    ['singular 3rd', 'նա'],
    ['plural 1st', 'մենք'],
    ['plural 2nd', 'դուք'],
    ['plural 3rd', 'նրանք'],
];

const verb1: Verb = {
    id: '1',
    value: 'գալ',
    ru: ['приходить'],
    comment: "к говорящему",
    tags: ['глагол'],
    parent: null,
    present: {
        'singular 1st': { positive: 'գալիս եմ', negative: 'չեմ գալիս', },
        'singular 2nd': { positive: 'գալիս ես', negative: 'չես գալիս', },
        'singular 3rd': { positive: 'գալիս է', negative: 'չէ գալ', },
        'plural 1st': { positive: 'գալիս ենք', negative: 'չենք գալիս', },
        'plural 2nd': { positive: 'գալիս եք', negative: 'չեք գալիս', },
        'plural 3rd': { positive: 'գալիս են', negative: 'չեն գալիս', },
    },
    pastImperfective: {
        'singular 1st': { positive: 'գալիս էի', negative: 'չէի գալիս', },
        'singular 2nd': { positive: 'գալիս էիր', negative: 'չեիր գալիս', },
        'singular 3rd': { positive: 'գալիս էր', negative: 'չէր գալիս', },
        'plural 1st': { positive: 'գալիս էինք', negative: 'չենք գալիս', },
        'plural 2nd': { positive: 'գալիս էիք', negative: 'չեք գալիս', },
        'plural 3rd': { positive: 'գալիս էին', negative: 'չեն գալիս', },
    },
    aorist: {
        'singular 1st': { positive: 'եկա', negative: 'չեկա', },
        'singular 2nd': { positive: 'եկար', negative: 'չեկար', },
        'singular 3rd': { positive: 'եկավ', negative: 'չեկավ', },
        'plural 1st': { positive: 'եկանք', negative: 'չեկանք', },
        'plural 2nd': { positive: 'եկաք', negative: 'չեկաք', },
        'plural 3rd': { positive: 'եկան', negative: 'չեկան', },
    }
}

function HyVerb() {
    return (
        <div>
            <div>
                <h2>Глагол {verb1.value}</h2>
            
            </div>
            <div>
                <h3>Настоящее время</h3>
                <ul className="hy-content">
                    {Object.entries(verb1.present).map(([person, forms]) => (
                        <li key={person}>
                            {ArmenianPronouns.find(([key]) => key === person)?.[1]}: {forms.positive}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Прошедшее время</h3>
                <ul className="hy-content">
                    {Object.entries(verb1.pastImperfective).map(([person, forms]) => (
                        <li key={person}>
                            {ArmenianPronouns.find(([key]) => key === person)?.[1]}: {forms.positive}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Аорист</h3>
                <ul className="hy-content">
                    {Object.entries(verb1.aorist).map(([person, forms]) => (
                        <li key={person}>
                            {ArmenianPronouns.find(([key]) => key === person)?.[1]}: {forms.positive}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HyVerb;