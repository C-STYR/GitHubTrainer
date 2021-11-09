const circularDataFlow = (existingCode, newCode) => {
  let singleSourceOfTruth = existingCode;
  let localCopy = singleSourceOfTruth;
  let featureBranch = localCopy + newCode;
  singleSourceOfTruth += featureBranch;
  return singleSoureOfTruth;
} 

//personal goals section
