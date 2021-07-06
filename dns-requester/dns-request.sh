#!/bin/bash

INDEX=0
SUCCESS=0
TARGETS=(google.com youtube.com cisco.com vmware.com ibm.com amazon.co.jp facebook.com qiita.com apple.com twitter.com)

while :; do 
  #for t in ${TARGETS[@]}; do  
  #  let INDEX++
  #  RC=$(nslookup -timeout=1 ${t} > /dev/null 2>&1; echo ${?})
  #  if [[ ${RC} -eq 0 ]]; then
  #    let SUCCESS++
  #  fi
  #done
  let INDEX++
  PREFIX=$(( $RANDOM % 1000 ))
  URI=test${PREFIX}.dns.corp.local
  RC=$(nslookup -timeout=1 ${URI} > /dev/null 2>&1; echo $?)
  if [[ ${RC} -eq 0 ]]; then
    let SUCCESS++
  fi
  echo "$(date "+%Y/%m/%d %H:%M:%S") total:${INDEX} success:${SUCCESS} failure:$(($INDEX -$SUCCESS))"
done
