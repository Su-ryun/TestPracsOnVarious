import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
# chrome_options.add_argument("--headless") # These options are needed if this test is running on a container 
# chrome_options.add_argument("--no-sandbox") # These options are needed if this test is running on a container
driver = webdriver.Chrome(options=chrome_options)  # Optional argument, if not specified will search path.
driver.get('https://www.google.com/')

time.sleep(5) # Wait for browser to load everything up
driver.find_element_by_id("gb_70").click() # The log-in button
driver.find_elements_by_id("identifierId")[0].send_keys('UBER SECERET')
driver.find_elements_by_class_name('VfPpkd-RLmnJb')[0].click()

time.sleep(5) # Wait for the browser to load everything up. Sometimes, Message: no such element: Unable to locate element:
              # will appear and close the test if the elements aren't properly loaded.
id_bar = driver.find_element_by_id("username")
id_bar.send_keys('SUPER SECRET')
password_bar = driver.find_element_by_id("password")
password_bar.send_keys('VERY SECRET')

driver.find_element_by_class_name('form-button').click()
time.sleep(10) # Let the user actually see something!
driver.quit()