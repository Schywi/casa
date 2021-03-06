import json
import sys

from .create_github_page import InitGithubPage


if __name__ == '__main__':
    """
    Parameters
    """
    json_name = input('π Enter a name of .json file to process (defalut: params.json): ')

    filename = 'params.json' if json_name == '' else json_name

    try:
        with open(filename) as f:
            param = json.load(f)
    except FileNotFoundError as e:
        print(f'β {e} : Cannot find .json file')
        sys.exit()

    """
    Create github repo and pages
    """
    # TODO: If this is the first time to create Github pages,
    # then create username.github.io repository first.
    # TODO: Clone base directory of mine
    param['blog_title'] = param['blog_title'].replace(' ', '_')
    param['siteUrl'] = f"https://{param['github_username']}.github.io"

    initiator = InitGithubPage(param)

    while True:
        mode = input('Choose command to execute : Create(c) / Update(u) ')
        if mode in ['c', 'C']:
            if not initiator.create_blog():
                break
            """
            Gatsby Build helper
            """
            initiator.set_adsense_code(param['google_adsense'])
            initiator.set_analytics_code(param['google_analytics'])
            initiator.copy_param2config(param)

            # TODO: src/images/ ν΄λ μμ΄μ½ λ³κ²½ κΈ°λ₯

            """
            Commit
            """
            initiator.finalize()
            break

        elif mode in ['u', 'U']:
            initiator.update_blog()
            break
        else:
            print('Unsupported command.\n')

    print('π¨ Repository creation succeeds')