# Schedule Tracker

Flutter로 만드는 일정 관리 iOS 앱.

## 개발 환경

- **개발 PC**: Windows (Flutter 코드 작성)
- **iOS 빌드**: GitHub Actions의 macOS 서버 (Mac 불필요)
- **아이폰 설치**: Sideloadly (Windows에서 사이드로딩)

## Windows에 Flutter 설치하기

1. [Flutter SDK 다운로드](https://docs.flutter.dev/get-started/install/windows) — zip을 받아 `C:\dev\flutter` 같은 경로에 압축 해제 (공백/한글 없는 경로 권장)
2. 시스템 환경 변수 `Path`에 `C:\dev\flutter\bin` 추가
3. 터미널에서 확인:
   ```
   flutter doctor
   ```
4. 에디터: [VS Code](https://code.visualstudio.com/) + Flutter 확장 설치 권장

## 로컬에서 실행해보기 (Windows)

iOS 시뮬레이터는 Windows에서 못 쓰지만, 개발 중에는 아래 방법으로 화면을 확인할 수 있어요:

```bash
flutter pub get

# 크롬 브라우저로 실행 (가장 간단)
flutter run -d chrome

# 또는 안드로이드 에뮬레이터 / USB로 연결한 안드로이드 폰
flutter run
```

UI 확인용으로는 크롬 실행이 제일 빠릅니다. 최종 확인만 아이폰에서 하면 돼요.

## 아이폰에 설치하기 (Mac 없이)

1. **IPA 빌드**: GitHub 레포 → `Actions` 탭 → `Build iOS IPA (unsigned)` → `Run workflow` 클릭. `main` 브랜치에 푸시해도 자동 실행됩니다.
2. **IPA 다운로드**: 빌드 완료 후 해당 실행 페이지 하단 `Artifacts`에서 `schedule_tracker-ipa` 다운로드 → 압축 풀면 `schedule_tracker.ipa`
3. **Sideloadly로 설치**:
   - [Sideloadly](https://sideloadly.io/) 를 Windows에 설치
   - 아이폰을 USB로 PC에 연결 (iTunes 또는 Apple Devices 앱 설치 필요)
   - Sideloadly에 IPA를 드래그하고 본인 Apple ID로 로그인 → Start
4. **아이폰에서 신뢰 설정**: 설정 → 일반 → VPN 및 기기 관리 → 본인 Apple ID 프로필 → 신뢰

> ⚠️ 무료 Apple ID로 서명하면 앱이 **7일 후 만료**되어 재설치가 필요합니다. Apple Developer Program($99/년)에 가입하면 1년 유효 + TestFlight 배포가 가능해요.

## 프로젝트 구조

```
lib/main.dart      # 앱 코드 시작점
test/              # 테스트
ios/               # iOS 네이티브 설정 (Xcode 프로젝트)
android/           # Android 네이티브 설정
```
