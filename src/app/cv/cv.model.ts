export class Cv {
    basics: Basics;
    experience: {
        sectionName: string;
        items: Experience[];
    };
    education: {
        sectionName: string;
        items: Education[];
    };
    skills: {
        sectionName: string;
        items: string[];
    };
    certifications: {
        sectionName: string;
        items: Certification[];
    };
    languages: {
        sectionName: string;
        items: Language[];
    };

    constructor(data: any) {
        // Basics
        this.basics = new Basics(data.basics);

        // Experience
        this.experience = {
            sectionName: data.experience.sectionName,
            items: []
        };

        for (const experience of data.experience.items) {
            this.experience.items.push(new Experience(experience));
        }

        // Education
        this.education = {
            sectionName: data.education.sectionName,
            items: []
        };

        for (const education of data.education.items) {
            this.education.items.push(new Education(education));
        }

        // Skills
        this.skills = {
            sectionName: data.skills.sectionName,
            items: data.skills.items
        };

        // Certifications
        this.certifications = {
            sectionName: data.certifications.sectionName,
            items: []
        };

        for (const certification of data.certifications.items) {
            this.certifications.items.push(new Certification(certification));
        }

        // Languages
        this.languages = {
            sectionName: data.languages.sectionName,
            items: []
        };

        for (const language of data.languages.items) {
            this.languages.items.push(new Language(language));
        }
    }
}

export class Basics {
    name: string;
    label: string;
    email: string;
    phone: string;
    address: string;

    constructor(data: any) {
        this.name = data.name;
        this.label = data.label;
        this.email = data.email;
        this.phone = data.phone;
        this.address = data.address;
    }
}

export class Experience {
    company: string;
    position: string;
    timePeriod: string;
    summaryList: string[];

    constructor(data: any) {
        this.company = data.company;
        this.position = data.position;
        this.timePeriod = data.timePeriod;
        this.summaryList = data.summaryList;
    }
}

export class Education {
    institution: string;
    field: string;
    timePeriod: string;

    constructor(data: any) {
        this.institution = data.institution;
        this.field = data.field;
        this.timePeriod = data.timePeriod;
    }
}

export class Certification {
    course: string;
    institution: string;
    timePeriod: string;

    constructor(data: any) {
        this.course = data.course;
        this.institution = data.institution;
        this.timePeriod = data.timePeriod;
    }
}

export class Language {
    language: string;
    proficiency: string;

    constructor(data: any) {
        this.language = data.language;
        this.proficiency = data.proficiency;
    }
}
