import data from './gl-2025/gl-2505-aero.ts'
// import data from './al-2025/al-2505-499p.ts'
let csv =
  'stage,cond,cond,card,cardClub,part,partClub,token,tokenClub,credit,creditClub,seasonToken\n'
let conditionsCount = 0
for (const stage of data.stages) {
  const conditions = stage.missions.reduce(
    (acc, cur) => acc + cur.conditions,
    0
  )
  conditionsCount += conditions
  const cardPersonal = stage.missions.reduce(
    (acc, cur) =>
      acc +
      cur.rewords
        .filter((r) => r.type === 'seCard')
        .reduce((res, curr) => res + curr.count, 0),
    0
  )
  const cardClub = stage.clubRewords
    .filter((r) => r.type === 'seCard')
    .reduce((res, curr) => res + curr.count, 0)
  const partPersonal = stage.missions.reduce(
    (acc, cur) =>
      acc +
      cur.rewords
        .filter((r) => r.type === 'sePart')
        .reduce((res, curr) => res + curr.count, 0),
    0
  )
  const partClub = stage.clubRewords
    .filter((r) => r.type === 'sePart')
    .reduce((res, curr) => res + curr.count, 0)
  const tokenPersonal = stage.missions.reduce(
    (acc, cur) =>
      acc +
      cur.rewords
        .filter((r) => r.type === 'token')
        .reduce((res, curr) => res + curr.count, 0),
    0
  )
  const tokenClub = stage.clubRewords
    .filter((r) => r.type === 'token')
    .reduce((res, curr) => res + curr.count, 0)
  const creditPersonal = stage.missions.reduce(
    (acc, cur) =>
      acc +
      cur.rewords
        .filter((r) => r.type === 'credit')
        .reduce((res, curr) => res + curr.count, 0),
    0
  )
  const creditClub = stage.clubRewords
    .filter((r) => r.type === 'credit')
    .reduce((res, curr) => res + curr.count, 0)

  const seasonTokenPersonal = stage.missions.reduce(
    (acc, cur) =>
      acc +
      cur.rewords
        .filter((r) => r.type === 'seasonToken')
        .reduce((res, curr) => res + curr.count, 0),
    0
  )
  csv += `${stage.stage},${conditions},${conditionsCount},${
    cardPersonal || ''
  },${cardClub || ''},${partPersonal || ''},${partClub || ''},${
    tokenPersonal || ''
  },${tokenClub || ''},${creditPersonal || ''},${creditClub || ''},${
    seasonTokenPersonal || ''
  }\n`
}
const cardPersonal = data.processRewords
  .filter((r) => r.reword.type === 'seCard')
  .reduce((acc, cur) => acc + cur.reword.count, 0)
const partPersonal = data.processRewords
  .filter((r) => r.reword.type === 'sePart')
  .reduce((acc, cur) => acc + cur.reword.count, 0)
const tokenPersonal = data.processRewords
  .filter((r) => r.reword.type === 'token')
  .reduce((acc, cur) => acc + cur.reword.count, 0)
const creditPersonal = data.processRewords
  .filter((r) => r.reword.type === 'credit')
  .reduce((acc, cur) => acc + cur.reword.count, 0)
csv += `process,,,${cardPersonal || ''},,${partPersonal || ''},,${
  tokenPersonal || ''
},,${creditPersonal || ''},\n`
await Deno.writeTextFile('./table.csv', csv)

console.log('输出成功！')
