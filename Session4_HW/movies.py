import requests
from bs4 import BeautifulSoup
import csv

file = open('movies.csv', mode='w', newline='') 
writer = csv.writer(file) 
writer.writerow(['title','rate','image','director','date'])


MOVIES_URL = f'https://movie.naver.com/movie/running/current.nhn'
movies_html = requests.get(MOVIES_URL)
movies_soup = BeautifulSoup(movies_html.text,"html.parser")

movies_list_box = movies_soup.find('ul',{'class': 'lst_detail_t1'})
movies_list = movies_list_box.find_all('li')

final_result = []
for movies in movies_list:
    title = movies.find("dt",{"class":"tit"}).find("a").string
    rate = movies.find("div",{"class":"star_t1"}).find("span",{"class":"num"}).text
    image = movies.find("div",{"class":"thumb"}).find("img")['src']
    director = movies.find("dl",{"class":"info_txt1"}).find_all("dd")[1].find("a").text
    date0 = movies.find("dl",{"class":"info_txt1"}).find_all("dd")[0].text
    date = date0.replace('\r','').replace('\t','').replace('\n','').split("|")[-1].replace("개봉","")
    
    movies_info = {
    "title" : title,
    "rate" : rate,
    "image" : image,
    "director" : director,
    "date" : date
    }
    final_result.append(movies_info)

for result in final_result:
    row = []
    row.append(result['title'])
    row.append(result['rate'])
    row.append(result['image'])
    row.append(result['director'])
    row.append(result['date'])
    writer.writerow(row)
print(final_result)