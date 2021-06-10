var users = [{user:"moreno",pass:"1234",id:1,nombre:"Julian Moreno"},
             {user:"dietz",pass:"1234",id:2,nombre:"Juan Dietz"}];

var verbosUno = [{verbo:"begin", pasado:"began", participio:"begun", traduccion:"empezar"},
                 {verbo:"do", pasado:"did", participio:"done", traduccion:"hacer"},
                 {verbo:"give", pasado:"gave", participio:"given", traduccion:"dar"},
                 {verbo:"have", pasado:"had", participio:"had", traduccion:"haber, tener"},
                 {verbo:"buy", pasado:"bought", participio:"bought", traduccion:"comprar"},
                 {verbo:"catch", pasado:"caught", participio:"caught", traduccion:"coger"},
                 {verbo:"go", pasado:"went", participio:"gone", traduccion:"irse"},
                 {verbo:"make", pasado:"made", participio:"made", traduccion:"hacer"},
                 {verbo:"read", pasado:"read", participio:"read", traduccion:"leer"},
                 {verbo:"see", pasado:"saw", participio:"seen", traduccion:"ver"},
                 {verbo:"run", pasado:"ran", participio:"run", traduccion:"correr"},
                 {verbo:"get", pasado:"got", participio:"got", traduccion:"conseguir"},
                 {verbo:"sleep", pasado:"slept", participio:"slept", traduccion:"dormir"},
                 {verbo:"wake", pasado:"woke", participio:"woken", traduccion:"despertar(se)"},
                 {verbo:"write", pasado:"wrote", participio:"written", traduccion:"escribir"},
                 {verbo:"wear", pasado:"wore", participio:"worn", traduccion:"llevar(puesto)"},
                 {verbo:"understand", pasado:"understood", participio:"understood", traduccion:"entender"},
                 {verbo:"find", pasado:"found", participio:"found", traduccion:"encontrar"},
                 {verbo:"drink", pasado:"drank", participio:"drunk", traduccion:"beber"}];

var verbosUnoAux = [{id:1,verbo:"begin", traduccion:""},
                    {id:2,verbo:"", traduccion:"hacer"},
                    {id:3,verbo:"give",  traduccion:""},
                    {id:4,verbo:"", traduccion:"haber, tener"},
                    {id:5,verbo:"buy", traduccion:""},
                    {id:6,verbo:"",traduccion:"coger"},
                    {id:7,verbo:"go",traduccion:""},
                    {id:8,verbo:"",traduccion:"beber"},
                    {id:9,verbo:"make",traduccion:""},
                    {id:10,verbo:"",traduccion:"leer"},
                    {id:12,verbo:"see",traduccion:""},
                    {id:13,verbo:"",traduccion:"correr"},
                    {id:14,verbo:"get",traduccion:""},
                    {id:15,verbo:"",traduccion:"dormir"},
                    {id:16,verbo:"wake",traduccion:""},
                    {id:17,verbo:"",traduccion:"escribir"},
                    {id:18,verbo:"wear",traduccion:""},
                    {id:19,verbo:"",traduccion:"entender"},
                    {id:20,verbo:"find",traduccion:""}];

var verbosUnoCompletos = [];

var idIntento = 0;
                                                          
module.exports={users, verbosUno,verbosUnoAux,verbosUnoCompletos,idIntento};