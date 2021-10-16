function getProponentFromParticipationSummaries(summaries) {
  let proponent=[]
  summaries.forEach(summary => {
    if (summary.programCode === 'VCS') {\
      summary.attributes.forEach(attribute => { 
        if (attribute.code === 'PROPONENT_NAME') {
           proponent = attribute.values.map(o => o.value)
        }
      })
    }
  })
  return proponent
}

module.exports = {
  getProponentFromParticipationSummaries
}