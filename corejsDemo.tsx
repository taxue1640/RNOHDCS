import 'core-js'
import {useState} from 'react'
import { View,StyleSheet,Button,Text,ScrollView,TextInput } from 'react-native'

const Babel = ()=>{
    let [objText1,setobjText1] = useState('')
    let [objText2,setobjText2] = useState('')

    // Object
    const assigns = ()=>{
        let temp = {a:1,b:2}
        setobjText1('Object.assign:'+JSON.stringify(temp)+JSON.stringify({c:3,d:4}))
        temp = Object.assign(temp,{c:3,d:4})
        setobjText2(JSON.stringify(temp))
    }
    const setPrototypeOf = ()=>{
        function Parent(){}
        function Child(){}
        Object.setPrototypeOf(Child.prototype,Parent.prototype)
        setobjText1('Object.setPrototypeOf:')
        setobjText2((new Child() instanceof Parent?'true':'false') + (new Child() instanceof Child?'true':'false') )
    }
    const keys = ()=>{
        let obj = {a:1,b:2,c:3}
        setobjText1('Object.keys:'+JSON.stringify(obj))
        setobjText2(JSON.stringify(Object.keys(obj)) )
    }
    const entries = ()=>{
        let obj = {a:1,b:2,c:3}
        setobjText1('Object.entries:'+JSON.stringify(obj))
        setobjText2(JSON.stringify(Object.entries(obj)) )
    }
    const values = ()=>{
        let obj = {a:1,b:2,c:3}
        setobjText1('Object.values:'+JSON.stringify(obj))
        setobjText2(JSON.stringify(Object.values(obj)) )
    }
    const getPrototypeOf = ()=>{
        setobjText1('Object.getPrototypeOf:')
        setobjText2(Object.getPrototypeOf('qwe')===String.prototype?'true':'false' )
    }

    //Array
    let [arrText1,setArrText1] = useState('')
    let [arrText2,setArrText2] = useState('')

    const froms = ()=>{
        setArrText1('Array.from:')
        setArrText2(JSON.stringify(Array.from({length:3},()=>'from')) )
    }
    const ofs = ()=>{
        setArrText1('Array.of:1,2,3,4,5')
        setArrText2(JSON.stringify(Array.of(1,2,3,4,5)) )
    }
    let [arrMap,setarrMap] = useState([2,4])
    const maps = ()=>{
        setArrText1('Array.map:'+JSON.stringify(arrMap))
        let temp = arrMap.map((item)=>item*item)
        setArrText2(JSON.stringify(temp))
        setarrMap(temp)
    }
    const finds = ()=>{
        let temp = [1,2,3,4,5]
        setArrText1('Array.find:[1,2,3,4,5] 2')
        setArrText2(JSON.stringify(temp.find((value,key,arr)=>value>2 )) )
    }
    const findIndexs = ()=>{
        let temp = [1,2,3,4,5]
        setArrText1('Array.findIndex:[1,2,3,4,5] 1')
        setArrText2(JSON.stringify(temp.findIndex((value,key,arr)=>value>1 )) )
    }
    let [arrReverse,setArrReverse] = useState([1,2,3,4,5])
    const reverses = ()=>{
        setArrText1('Array.reverse:'+JSON.stringify(arrReverse))
        setArrText2(JSON.stringify(arrReverse.reverse()))
    }
    let [arrSplice,setArrSplice] = useState([1,2,3,4,5])
    const splices = ()=>{
        setArrText1('Array.splice:')
        arrSplice.splice(0,2,3,4,5)
        setArrText2(JSON.stringify(arrSplice))
    }
    const sorts = ()=>{
        setArrText1('Array.sort:[1,5,2,7,4,9,3,8]')
        setArrText2(JSON.stringify([1,5,2,7,4,9,3,8].sort()))
    }
    const reduces = ()=>{
        let arr = [10,20,30]
        let temp = arr.reduce((a,c)=>{
            return a+c
        },0)
        setArrText1('Array.sort:'+arr)
        setArrText2(JSON.stringify(temp))
    }

    // string
    let [strText1,setStrText1] = useState('')
    let [strText2,setStrText2] = useState('')
    let str = 'test 1 2'
    const includes = ()=>{
        setStrText1('String.includes:')
        setStrText2(JSON.stringify(str.includes('test')?'true':'false'))
    }
    const startsWiths = ()=>{
        setStrText1('String.startsWith:')
        setStrText2(JSON.stringify(str.startsWith('test')?'true':'false'))
    }
    const endsWiths = ()=>{
        setStrText1('String.endsWith:')
        setStrText2(JSON.stringify(str.endsWith('2')?'true':'false'))
    }
    const repeats = ()=>{
        setStrText1('String.repeat:')
        setStrText2(JSON.stringify(str.repeat(2)))
    }
    const padStarts = ()=>{
        setStrText1('String.padStart:')
        setStrText2(JSON.stringify(str.padStart(20,'12345')))
    }
    const padEnds = ()=>{
        setStrText1('String.padEnd:')
        setStrText2(JSON.stringify(str.padEnd(20,'12345')))
    }
    const fromCodePoints = ()=>{
        setStrText1('String.fromCodePoint:97,134071,98')
        setStrText2(JSON.stringify(String.fromCodePoint(97,134071,98)))
    }
    const codePointAts = ()=>{
        setStrText1('String.codePointAt:𠮷')
        setStrText2(JSON.stringify('𠮷'.codePointAt(0)))
    }
    const raws = ()=>{
        setStrText1('String.raws: {raws:test},0,1,2')
        setStrText2(JSON.stringify(String.raw({raw:'test'},0,1,2)))
    }
    const bolds = ()=>{
        setStrText1('String.bold:')
        setStrText2(JSON.stringify('test'.bold()))
    }
    const anchors = ()=>{
        setStrText1('String.anchor:')
        setStrText2(JSON.stringify('bar'.anchor('a"b')))
    }
    const links = ()=>{
        setStrText1('String.link:')
        setStrText2(JSON.stringify('baz'.link('https://example.com')))
    }

    // RegExp
    let [regText1,setRegText1] = useState('')
    let [regText2,setRegText2] = useState('')
    const tests = ()=>{
        setRegText1('RegExp.test:')
        setRegText2(JSON.stringify(RegExp('.', 's').test('\n')))
    }
    const dotAlls = ()=>{
        setRegText1('RegExp.dotAll:')
        setRegText2(JSON.stringify(RegExp('.', 's').dotAll))
    }
    const execs = ()=>{
        setRegText1('RegExp.exec:')
        setRegText2(JSON.stringify(RegExp('foo:(?<foo>\\w+),bar:(?<bar>\\w+)').exec('foo:abc,bar:def')))
    }
    const flags = ()=>{
        setRegText1('RegExp.flags:')
        setRegText2(JSON.stringify(/foo/gim.flags))
    }
    const stickys = ()=>{
        setRegText1('RegExp.stickys:')
        setRegText2(JSON.stringify(RegExp('foo', 'y').sticky))
    }
    const replaces = ()=>{
        setRegText1('RegExp.replace:')
        setRegText2(JSON.stringify('foo:abc,bar:def'.replace(RegExp('foo:(?<foo>\\w+),bar:(?<bar>\\w+)'), '$<bar>,$<foo>')))
    }
    const prototypes = ()=>{
        setRegText1('RegExp.prototype.toString.call:')
        setRegText2(JSON.stringify(RegExp.prototype.toString.call({ source: 'foo', flags: 'bar' })))
    }
    const replaceAlls = ()=>{
        setRegText1('RegExp.replaceAll:')
        setRegText2(JSON.stringify('Test abc test test abc test.'.replaceAll('abc', 'foo')))
    }


    // Date
    let [dateText1,setDateText1] = useState('')
    let [dateText2,setDateText2] = useState('')
    const dates = ()=>{
        setDateText1('Date:')
        setDateText2(JSON.stringify(new Date().toString()))
    }
    const nows = ()=>{
        setDateText1('Date.now:')
        setDateText2(JSON.stringify(Date.now()))
    }
    const parses = ()=>{
        setDateText1('Date.parse:')
        setDateText2(JSON.stringify(Date.parse('2024-04-01')))
    }
    const utcs = ()=>{
        setDateText1('Date.UTC:')
        setDateText2(JSON.stringify(Date.UTC(2023,4,1)))
    }
    const toISOStrings = ()=>{
        let date = new Date()
        setDateText1('Date.toISOString:')
        setDateText2(JSON.stringify(date.toISOString()))
    }
    const toJSONs = ()=>{
        let date = new Date()
        setDateText1('Date.toJSON:')
        setDateText2(JSON.stringify(date.toJSON()))
    }
    const toLocaleStrings = ()=>{
        let date = new Date()
        setDateText1('Date.toLocaleString:')
        setDateText2(JSON.stringify(date.toLocaleString()))
    }
    const toLocaleDateStrings = ()=>{
        let date = new Date()
        setDateText1('Date.toLocaleDateString:')
        setDateText2(JSON.stringify(date.toLocaleDateString()))
    }
    const toLocaleTimeStrings = ()=>{
        let date = new Date()
        setDateText1('Date.toLocaleTimeString:')
        setDateText2(JSON.stringify(date.toLocaleTimeString()))
    }
    const valueOfs = ()=>{
        let date = new Date()
        setDateText1('Date.valueOf:')
        setDateText2(JSON.stringify(date.valueOf()))
    }
    const getTimes = ()=>{
        let date = new Date()
        setDateText1('Date.getTime:')
        setDateText2(JSON.stringify(date.getTime()))
    }
    const toDateStrings = ()=>{
        let date = new Date()
        setDateText1('Date.toDateString:')
        setDateText2(JSON.stringify(date.toDateString()))
    }
    const toTimeStrings = ()=>{
        let date = new Date()
        setDateText1('Date.toTimeString:')
        setDateText2(JSON.stringify(date.toTimeString()))
    }
    const getDates = ()=>{
        let date = new Date()
        setDateText1('Date.getDate:')
        setDateText2(JSON.stringify(date.getDate()))
    }
    const getDays = ()=>{
        let date = new Date()
        setDateText1('Date.getDay:')
        setDateText2(JSON.stringify(date.getDay()))
    }
    const getFullYears = ()=>{
        let date = new Date()
        setDateText1('Date.getFullYear:')
        setDateText2(JSON.stringify(date.getFullYear()))
    }
    const getHours = ()=>{
        let date = new Date()
        setDateText1('Date.getHours:')
        setDateText2(JSON.stringify(date.getHours()))
    }
    const getMilliseconds = ()=>{
        let date = new Date()
        setDateText1('Date.getMilliseconds:')
        setDateText2(JSON.stringify(date.getMilliseconds()))
    }
    const getMinutes = ()=>{
        let date = new Date()
        setDateText1('Date.getMinutes :')
        setDateText2(JSON.stringify(date.getMinutes()))
    }
    const getMonths = ()=>{
        let date = new Date()
        setDateText1('Date.getMonth :')
        setDateText2(JSON.stringify(date.getMonth()))
    }
    const getSeconds = ()=>{
        let date = new Date()
        setDateText1('Date.getSeconds :')
        setDateText2(JSON.stringify(date.getSeconds()))
    }
    const getTimezoneOffsets = ()=>{
        let date = new Date()
        setDateText1('Date.getTimezoneOffset :')
        setDateText2(JSON.stringify(date.getTimezoneOffset()))
    }



    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.text}>
                    Object
                </Text>
                <View style={styles.flex}>
                    <Button title='Object.assign' onPress={assigns} ></Button>
                    <Button title='object.setPrototypeOf' onPress={setPrototypeOf} ></Button>
                    <Button title='Object.keys' onPress={keys}  ></Button>
                    <Button title='Object.values' onPress={values}  ></Button>
                    <Button title='Object.entries' onPress={entries} ></Button>
                    <Button title='Object.getPrototypeOf' onPress={getPrototypeOf}  ></Button>
                </View>
                <Text style={styles.bord}>{objText1}</Text>
                <Text style={styles.bord}>{objText2}</Text>
            </View>
            <View>
                <Text style={styles.text}>
                    Array
                </Text>
                <View style={styles.flex}>
                    <Button title='Array.froms' onPress={froms} ></Button>
                    <Button title='Array.of' onPress={ofs} ></Button>
                    <Button title='Array.map' onPress={maps}  ></Button>
                    <Button title='Array.find' onPress={finds}  ></Button>
                    <Button title='Array.findIndex' onPress={findIndexs} ></Button>
                    <Button title='Array.reverse' onPress={reverses}  ></Button>
                    <Button title='Array.splice' onPress={splices}  ></Button>
                    <Button title='Array.sort' onPress={sorts}  ></Button>
                    <Button title='Array.reduce' onPress={reduces}  ></Button>
                </View>
                <Text style={styles.bord}>{arrText1}</Text>
                <Text style={styles.bord}>{arrText2}</Text>
            </View>

            <View>
                <Text style={styles.text}>
                    String
                </Text>
                <View style={styles.flex}>
                    <Button title='String.includes' onPress={includes} ></Button>
                    <Button title='String.startsWith' onPress={startsWiths} ></Button>
                    <Button title='String.endsWith' onPress={endsWiths} ></Button>
                    <Button title='String.repeat' onPress={repeats} ></Button>
                    <Button title='String.padStart' onPress={padStarts} ></Button>
                    <Button title='String.padEnd' onPress={padEnds} ></Button>
                    <Button title='String.fromCodePoint' onPress={fromCodePoints} ></Button>
                    <Button title='String.codePointAt' onPress={codePointAts} ></Button>
                    <Button title='String.raw' onPress={raws} ></Button>
                    <Button title='String.bold' onPress={bolds} ></Button>
                    <Button title='String.anchor' onPress={anchors} ></Button>
                    <Button title='String.link' onPress={links} ></Button>
                    
                </View>
                <Text style={styles.bord}>{strText1}</Text>
                <Text style={styles.bord}>{strText2}</Text>
            </View>
            <View>
                <Text style={styles.text}>
                    RegExp
                </Text>
                <View style={styles.flex}>
                    <Button title='RegExp.test' onPress={tests} ></Button>
                    <Button title='RegExp.dotAll' onPress={dotAlls} ></Button>
                    <Button title='RegExp.exec' onPress={execs}  ></Button>
                    <Button title='RegExp.flag' onPress={flags}  ></Button>
                    <Button title='RegExp.sticky' onPress={stickys} ></Button>
                    <Button title='RegExp.replace' onPress={replaces}  ></Button>
                    <Button title='RegExp.prototype.toString.call' onPress={prototypes}  ></Button>
                    <Button title='RegExp.replaceAll' onPress={replaceAlls}  ></Button>
                </View>
                <Text style={styles.bord}>{regText1}</Text>
                <Text style={styles.bord}>{regText2}</Text>
            </View>
            <View>
                <Text style={styles.text}>
                    Date
                </Text>
                <View style={styles.flex}>
                    <Button title='Date' onPress={dates} ></Button>
                    <Button title='Date.now' onPress={nows} ></Button>
                    <Button title='Date.parse' onPress={parses}  ></Button>
                    <Button title='Date.UTC' onPress={utcs}  ></Button>
                    <Button title='Date.toISOString' onPress={toISOStrings} ></Button>
                    <Button title='Date.toJSON' onPress={toJSONs}  ></Button>
                    <Button title='Date.toLocaleDateString' onPress={toLocaleDateStrings}  ></Button>
                    <Button title='Date.toLocaleString' onPress={toLocaleStrings}  ></Button>
                    <Button title='Date.toLocaleTimeString' onPress={toLocaleTimeStrings}  ></Button>
                    <Button title='Date.valueOf' onPress={valueOfs}  ></Button>
                    <Button title='Date.getTime' onPress={getTimes}  ></Button>
                    <Button title='Date.toDateString' onPress={toDateStrings}  ></Button>
                    <Button title='Date.toTimeString' onPress={toTimeStrings}  ></Button>
                    <Button title='Date.getDate' onPress={getDates}  ></Button>
                    <Button title='Date.getDay' onPress={getDays}  ></Button>
                    <Button title='Date.getFullYear' onPress={getFullYears}  ></Button>
                    <Button title='Date.getHours' onPress={getHours}  ></Button>
                    <Button title='Date.getMilliseconds' onPress={getMilliseconds}  ></Button>
                    <Button title='Date.getMinutes ' onPress={getMinutes }  ></Button>
                    <Button title='Date.getMonth' onPress={getMonths}  ></Button>
                    <Button title='Date.getSeconds' onPress={getSeconds}  ></Button>
                    <Button title='Date.getTimezoneOffset' onPress={getTimezoneOffsets}  ></Button>
                </View>
                <Text style={styles.bord}>{dateText1}</Text>
                <Text style={styles.bord}>{dateText2}</Text>
            </View>
        </ScrollView>
    )

    
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%'
    },
    text:{
        width: '100%',
        height: 30,
        backgroundColor: '#eee',
        marginTop: 5,
        fontSize: 16,
        lineHeight: 30,
        textAlign: 'center',
        numberOfLines: 1
    },
    flex:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-around',
    },
    bord:{
        borderWidth: 1,
        minHeight: 30,
        marginTop: 10,
        fontSize: 16,
        textAlign:'center'
    }
})

export default Babel;