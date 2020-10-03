export abstract class AbstractProgram {

    name: string = ''
    path: string = ''
}

export class Copy extends AbstractProgram {
    from: string = ''
    to: string = ''

}

export const programs:AbstractProgram[] = []

// export const programs:AbstractProgram[] = [
//     {name: 'Copy', path: '/copy', from: 'C:/test.txt', to: 'C:/copy.txt'} as Copy,
// ]