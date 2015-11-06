var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5ab2f4d0-1b38-4cea-b7a9-ef7da6a7dcf0', label: '/\n388.5', color: '#f0ad4e', title: 'Name: /<br>Value: 388.5<br>Type: OPERATOR<br>Id: 5ab2f4d0-1b38-4cea-b7a9-ef7da6a7dcf0<br>Formula Expression: Formula String: E4 / VALUE; Formula Values: 77.7 / 0.2; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1169afe1'},
{id: '6b2ba616-8eaa-48ad-921c-9309422a36f0', label: 'E4\n77.7', color: '#31b0d5', title: 'Name: E4<br>Value: 77.7<br>Type: CELL_WITH_VALUE<br>Id: 6b2ba616-8eaa-48ad-921c-9309422a36f0<br>Formula Expression: Formula String: E4; Formula Values: 77.7; Formula Ptg: 77.7; Ptgs: E4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1169afe1'},
{id: '2320e313-69b1-4c39-8e22-2c168547888f', label: 'VALUE\n0.2', color: '#31b0d5', title: 'Name: VALUE<br>Value: 0.2<br>Type: CONSTANT_VALUE<br>Id: 2320e313-69b1-4c39-8e22-2c168547888f<br>Formula Expression: Formula String: VALUE; Formula Values: 0.2; Formula Ptg: 0.2; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1169afe1'},
{id: '6bad03ea-2656-49e2-81d8-c5bb43a08b8b', label: '*\n41686.049999999996', color: '#f0ad4e', title: 'Name: *<br>Value: 41686.049999999996<br>Type: OPERATOR<br>Id: 6bad03ea-2656-49e2-81d8-c5bb43a08b8b<br>Formula Expression: Formula String: E5 * E4 / VALUE; Formula Values: 107.3 * 77.7 / 0.2; Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1169afe1'},
{id: 'f0442455-c1e5-436b-b2d5-19a224fb4f9e', label: 'E5\n107.3', color: '#31b0d5', title: 'Name: E5<br>Value: 107.3<br>Type: CELL_WITH_VALUE<br>Id: f0442455-c1e5-436b-b2d5-19a224fb4f9e<br>Formula Expression: Formula String: E5; Formula Values: 107.3; Formula Ptg: 107.3; Ptgs: E5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1169afe1'},
{id: '929fa8c2-ad36-4430-80da-457957dbe156', label: 'E12\n41686.049999999996', color: '#31b0d5', title: 'Name: E12<br>Value: 41686.049999999996<br>Type: CELL_WITH_FORMULA<br>Id: 929fa8c2-ad36-4430-80da-457957dbe156<br>Formula Expression: Formula String: E5 * E4 / VALUE; Formula Values: 107.3 * 77.7 / 0.2; Formula Ptg: 107.3 77.7 0.2 / *; Ptgs: E5 E4 VALUE / * Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1169afe1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2320e313-69b1-4c39-8e22-2c168547888f', to: '5ab2f4d0-1b38-4cea-b7a9-ef7da6a7dcf0'},
{from: '6bad03ea-2656-49e2-81d8-c5bb43a08b8b', to: '929fa8c2-ad36-4430-80da-457957dbe156'},
{from: '5ab2f4d0-1b38-4cea-b7a9-ef7da6a7dcf0', to: '6bad03ea-2656-49e2-81d8-c5bb43a08b8b'},
{from: 'f0442455-c1e5-436b-b2d5-19a224fb4f9e', to: '6bad03ea-2656-49e2-81d8-c5bb43a08b8b'},
{from: '6b2ba616-8eaa-48ad-921c-9309422a36f0', to: '5ab2f4d0-1b38-4cea-b7a9-ef7da6a7dcf0'}
                            ]);